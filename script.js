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
  speed: 0.09,
  moving: false,
  static: true,
  run: hobbitRun1Right,
};

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
  },
  false
);

const movementArrRight = [
  hobbitRun1Right,
  hobbitRun2Right,
  hobbitRun3Right,
  hobbitRun4Right,
  hobbitRun5Right,
  hobbitRun1Right,
];

function hobbitRunAnimateRight() {
  for (let i = 0; i < movementArrRight.length; i++) {
    hobbit.run = movementArrRight[i];
    const moveFrame = () => {
      hobbit.run = movementArrRight[i];
    };
    setTimeout(moveFrame, i * 200);
  }
}
//right running animation

function hobbitRunAnimateLeft() {
  setTimeout(hobbitRunCycle1Left, 200);
  setTimeout(hobbitRunCycle2Left, 200);
  setTimeout(hobbitRunCycle3Left, 200);
  setTimeout(hobbitRunCycle4Left, 200);
  setTimeout(hobbitRunCycle5Left, 200);
}
//left running animation

function hobbitJumpResetLeft() {
  hobbit.yCoord = 385;
  hobbit.run = hobbitRun1Left;
}

function hobbitJumpResetRight() {
  hobbit.yCoord = 385;
  hobbit.run = hobbitRun1Right;
}

function playerMove() {
  if ("ArrowLeft" in keyClick) {
    hobbit.static = false;
    hobbit.moving = true;
    setTimeout(hobbitRunAnimateLeft, 50);
    // hobbit.run = hobbitRun1Left;
    hobbit.xCoord -= hobbit.speed;
  }
  if ("ArrowRight" in keyClick) {
    hobbit.static = false;
    hobbit.moving = true;
    // hobbit.run = hobbitRun1Right;
    // setTimeout(hobbitRunAnimateRight, 50);
    hobbit.xCoord += hobbit.speed;
  }
  if (" " in keyClick) {
    let jumpTime = Date.now();
    if (hobbit.run === hobbitRun1Left && hobbit.yCoord === 385) {
      hobbit.yCoord = 365;
      hobbit.run = hobbitRun7Left;
      if ((hobbit.yCoord = 365)) {
        setTimeout(hobbitJumpResetLeft, 375);
      }
      if (
        " " in keyClick &&
        Date.now() - jumpTime >= 500 &&
        hobbit.yCord === 365
      ) {
        hobbit.hobbitJumpResetLeft();
      }
    }

    if (hobbit.run === hobbitRun1Right && hobbit.yCoord === 385) {
      hobbit.yCoord = 365;
      hobbit.run = hobbitRun7Right;

      if ((hobbit.yCoord = 365)) {
        setTimeout(hobbitJumpResetRight, 375);
      }
      if (
        " " in keyClick &&
        Date.now() - jumpTime >= 500 &&
        hobbit.yCoord === 365
      ) {
        hobbit.hobbitJumpResetRight();
      }
    }
    if ("ArrowRight" in keyClick && " " in keyClick) {
      hobbit.run = hobbitRun7Right;
    }
    if ("ArrowLeft" in keyClick && " " in keyClick) {
      hobbit.run = hobbitRun7Left;
    }
  }
  //jump handling -- but add in a jump timeout
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
    hobbit.moving = false;
    hobbit.static = true;
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
  if (hobbit.static) {
    setInterval(hobbitRunAnimateRight, 200);
  }
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
