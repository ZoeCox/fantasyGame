const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");

const treeBackground = new Image();
treeBackground.ready = false;
treeBackground.onload = checkIfReady;
treeBackground.src = "./backGround/treeBackground.png";

const hobbitRun1Right = new Image();
hobbitRun1Right.ready = false;
hobbitRun1Right.onload = checkIfReady;
hobbitRun1Right.src = "./hobbitSprite/hobbitRun1Right.png";

const hobbitRun1Left = new Image();
hobbitRun1Left.ready = false;
hobbitRun1Left.onload = checkIfReady;
hobbitRun1Left.src = "./hobbitSprite/hobbitRun1Left.png";

const hobbitRun2Right = new Image();
hobbitRun2Right.ready = false;
hobbitRun2Right.onload = checkIfReady;
hobbitRun2Right.src = "./hobbitSprite/hobbitRun2Right.png";

const hobbitRun2Left = new Image();
hobbitRun2Left.ready = false;
hobbitRun2Left.onload = checkIfReady;
hobbitRun2Left.src = "./hobbitSprite/hobbitRun2Left.png";

const hobbitRun3Right = new Image();
hobbitRun3Right.ready = false;
hobbitRun3Right.onload = checkIfReady;
hobbitRun3Right.src = "./hobbitSprite/hobbitRun3Right.png";

const hobbitRun3Left = new Image();
hobbitRun3Left.ready = false;
hobbitRun3Left.onload = checkIfReady;
hobbitRun3Left.src = "./hobbitSprite/hobbitRun3Left.png";

const hobbitRun4Right = new Image();
hobbitRun4Right.ready = false;
hobbitRun4Right.onload = checkIfReady;
hobbitRun4Right.src = "./hobbitSprite/hobbitRun4Right.png";

const hobbitRun4Left = new Image();
hobbitRun4Left.ready = false;
hobbitRun4Left.onload = checkIfReady;
hobbitRun4Left.src = "./hobbitSprite/hobbitRun4Left.png";

const hobbitRun5Right = new Image();
hobbitRun5Right.ready = false;
hobbitRun5Right.onload = checkIfReady;
hobbitRun5Right.src = "./hobbitSprite/hobbitRun5Right.png";

const hobbitRun5Left = new Image();
hobbitRun5Left.ready = false;
hobbitRun5Left.onload = checkIfReady;
hobbitRun5Left.src = "./hobbitSprite/hobbitRun5Left.png";

const hobbitRun7Right = new Image();
hobbitRun7Right.ready = false;
hobbitRun7Right.onload = checkIfReady;
hobbitRun7Right.src = "./hobbitSprite/hobbitRun7Right.png";

const hobbitRun7Left = new Image();
hobbitRun7Left.ready = false;
hobbitRun7Left.onload = checkIfReady;
hobbitRun7Left.src = "./hobbitSprite/hobbitRun7Left.png";

//still images for hobbit/movement frames

const hobbit = {
  xCoord: 25,
  yCoord: 385,
  height: 125,
  width: 125,
  speed: 0.1,
  moving: false,
  static: true,
  run: hobbitRun1Right,
};

const movementArrIdle = [hobbitRun1Right, hobbitRun2Right, hobbitRun1Right];

const movementArrRight = [
  hobbitRun1Right,
  hobbitRun2Right,
  hobbitRun3Right,
  hobbitRun4Right,
  hobbitRun5Right,
  hobbitRun1Right,
];

const movementArrLeft = [
  hobbitRun1Left,
  hobbitRun2Left,
  hobbitRun3Left,
  hobbitRun4Left,
  hobbitRun5Left,
  hobbitRun1Left,
];

function hobbitAnimateIdle() {
  console.log("hobbit is idle");
  for (let i = 0; i < movementArrIdle.length; i++) {
    const moveFrame = () => {
      hobbit.run = movementArrIdle[i];
    };
    setTimeout(moveFrame, i * 250);
  }
}

let hobbitIdleInterval = setInterval(hobbitAnimateIdle, 1000);

console.log(hobbitIdleInterval);

//idle animation

let hobbitRunRightInterval;

function hobbitRunAnimateRight() {
  console.log("hobbit is going right");
  for (let i = 0; i < movementArrRight.length; i++) {
    const moveFrame = () => {
      hobbit.run = movementArrRight[i];
    };
    setTimeout(moveFrame, i * 200);
  }
}
//right running animation

// let hobbitRunLeftInterval = setInterval(function hobbitRunAnimateLeft() {
//   console.log("hobbit is going left");
//   for (let i = 0; i < movementArrLeft.length; i++) {
//     const moveFrame = () => {
//       hobbit.run = movementArrLeft[i];
//     };
//     setTimeout(moveFrame, i * 200);
//   }
// }, 1000);
//left running animation

function closeRightInterval() {
  console.log(typeof hobbitRunRightInterval, hobbitRunRightInterval);

  console.log(clearInterval(hobbitRunRightInterval));
  console.log("the right running has stopped");
}

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
    hobbit.moving = true;
    clearInterval(hobbitIdleInterval);
    if (hobbit.moving) {
      hobbitRunRightInterval = setInterval(hobbitRunAnimateRight, 1000);
    }
  },
  false
);

function playerMove() {
  if ("ArrowLeft" in keyClick) {
    clearInterval(hobbitIdleInterval);
    hobbit.static = false;
    hobbit.moving = true;
    // hobbit.run = hobbitRun1Left;
    hobbit.xCoord -= hobbit.speed;
  } else {
    hobbit.static = true;
    hobbit.moving = false;
  }
  if ("ArrowRight" in keyClick) {
    clearInterval(hobbitIdleInterval);
    hobbit.static = false;
    hobbit.moving = true;
    hobbit.xCoord += hobbit.speed;
  } else {
    hobbit.static = true;
    hobbit.moving = false;
  }
  const hobbitLeadingRight = hobbit.xCoord + 70;
  const hobbitLeadingLeft = hobbit.xCoord + 60;
  const doesHobCollideRight = hobbitLeadingRight >= canvas.width;
  const doesHobCollideLeft = hobbitLeadingLeft <= 0;
  if (doesHobCollideRight) {
    console.log("you've hit the right edge");
    hobbit.xCoord = hobbit.xCoord - 30;
  }
  if (doesHobCollideLeft) {
    console.log("you've hit the left edge");
    hobbit.xCoord = hobbit.xCoord + 30;
  }
  //edge detection
}

document.addEventListener(
  "keyup",
  function (event) {
    delete keyClick[event.key];
    console.log("key has been released");
    closeRightInterval();
    hobbitIdleInterval = setInterval(hobbitAnimateIdle, 1000);
    hobbit.moving = false;
  },
  false
);

function checkIfReady() {
  this.ready = true;
  playGame();
}

function playGame() {
  playerMove();
  render();
  requestAnimationFrame(playGame);
}

function render() {
  context.fillStyle = "antiqueWhite";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.drawImage(treeBackground, 0, 0, 750, 500);
  context.drawImage(
    hobbit.run,
    hobbit.xCoord,
    hobbit.yCoord,
    hobbit.width,
    hobbit.height
  );
}

document.body.appendChild(canvas);

//jump logic etc - reinstate later

// function hobbitJumpResetLeft() {
//   hobbit.yCoord = 385;
//   hobbit.run = hobbitRun1Left;
// }

// function hobbitJumpResetRight() {
//   hobbit.yCoord = 385;
//   hobbit.run = hobbitRun1Right;
// }

// if (" " in keyClick) {
//   hobbit.static = false;
//   if (hobbit.run === hobbitRun1Left && hobbit.yCoord === 385) {
//     hobbit.yCoord = 365;
//     hobbit.run = hobbitRun7Left;
//     if ((hobbit.yCoord = 365)) {
//       setTimeout(hobbitJumpResetLeft, 375);
//     }
//   }

//   if (hobbit.run === hobbitRun1Right && hobbit.yCoord === 385) {
//     hobbit.yCoord = 365;
//     hobbit.run = hobbitRun7Right;

//     if ((hobbit.yCoord = 365)) {
//       setTimeout(hobbitJumpResetRight, 375);
//     }
//   }
//   if ("ArrowRight" in keyClick && " " in keyClick) {
//     hobbit.run = hobbitRun7Right;
//   }
//   if ("ArrowLeft" in keyClick && " " in keyClick) {
//     hobbit.run = hobbitRun7Left;
//   }
// }
// //jump handling -- but add in a jump timeout
