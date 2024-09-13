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
  hobbitMovingRight: false,
  hobbitMovingLeft: false,
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

function hobbitAnimate(frame) {
  let directionArr;
  if (hobbit.movingLeft) {
    directionArr = movementArrLeft;
  } else if (hobbit.movingRight) {
    directionArr = movementArrRight;
  } else if (!hobbit.movingLeft && !hobbit.movingRight) {
    directionArr = movementArrIdle;
  }
  hobbit.run = directionArr[frame];

  const nextAnimateFrame = directionArr[frame] + 1;
  // console.log(nextAnimateFrame);
  if (nextAnimateFrame < directionArr.length) {
    setTimeout(() => hobbitAnimate(nextAnimateFrame), 400);
    // console.log(nextAnimateFrame);
  }
}

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
  },
  false
);

function playerMove() {
  if ("ArrowLeft" in keyClick) {
    hobbit.xCoord -= hobbit.speed;
    hobbit.movingLeft = true;
  }
  if ("ArrowRight" in keyClick) {
    hobbit.xCoord += hobbit.speed;
    hobbit.movingRight = true;
  }
  //left and right movement
}

function collisionDetect() {
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

function playerJump() {
  function hobbitJump() {
    hobbit.yCoord = 365;
    setTimeout(function () {
      hobbit.yCoord = 385;
    }, 300);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      hobbitJump();
    }
  });
  //jump handling
}

// hobbitRunInterval = setInterval(hobbitRunAnimateRight, 1200);

document.addEventListener(
  "keyup",
  function (event) {
    delete keyClick[event.key];
    hobbit.movingRight = false;
    hobbit.movingLeft = false;
  },
  false
);

// function animateSwitcher() {
//   if (!hobbit.movingRight && !hobbit.movingLeft) {
//     clearInterval(hobbitRunInterval);

//     for (let i = 0; i < timeoutQueue; i++) {
//       clearTimeout(timeoutQueue[i]);
//     }
//     hobbit.movingLeft = true;
//     console.log("hobbit moving LEFT");
//     hobbitRunInterval = setInterval(hobbitRunAnimateLeft, 1200);
//   }
// }

function checkIfReady() {
  this.ready = true;
  playGame();
}

function playGame() {
  // animateSwitcher();
  hobbitAnimate([0]);
  playerJump();
  playerMove();
  collisionDetect();
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
