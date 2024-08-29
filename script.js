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

const hobbitRun6Right = new Image();
hobbitRun6Right.ready = false;
hobbitRun6Right.onload = checkIfReady;
hobbitRun6Right.src = "./hobbitSprite/hobbitRun6Right.png";

const hobbitRun6Left = new Image();
hobbitRun6Left.ready = false;
hobbitRun6Left.onload = checkIfReady;
hobbitRun6Left.src = "./hobbitSprite/hobbitRun6Left.png";

const hobbitRun7Right = new Image();
hobbitRun7Right.ready = false;
hobbitRun7Right.onload = checkIfReady;
hobbitRun7Right.src = "./hobbitSprite/hobbitRun7Right.png";

const hobbitRun7Left = new Image();
hobbitRun7Left.ready = false;
hobbitRun7Left.onload = checkIfReady;
hobbitRun7Left.src = "./hobbitSprite/hobbitRun7Left.png";

const hobbitRun8Right = new Image();
hobbitRun8Right.ready = false;
hobbitRun8Right.onload = checkIfReady;
hobbitRun8Right.src = "./hobbitSprite/hobbitRun8Right.png";

const hobbitRun8Left = new Image();
hobbitRun8Left.ready = false;
hobbitRun8Left.onload = checkIfReady;
hobbitRun8Left.src = "./hobbitSprite/hobbitRun8Left.png";

const hobbitRun9Right = new Image();
hobbitRun9Right.ready = false;
hobbitRun9Right.onload = checkIfReady;
hobbitRun9Right.src = "./hobbitSprite/hobbitRun9Right.png";

const hobbitRun9Left = new Image();
hobbitRun9Left.ready = false;
hobbitRun9Left.onload = checkIfReady;
hobbitRun9Left.src = "./hobbitSprite/hobbitRun9Left.png";

const hobbitRun10Right = new Image();
hobbitRun10Right.ready = false;
hobbitRun10Right.onload = checkIfReady;
hobbitRun10Right.src = "./hobbitSprite/hobbitRun10Right.png";

const hobbitRun10Left = new Image();
hobbitRun10Left.ready = false;
hobbitRun10Left.onload = checkIfReady;
hobbitRun10Left.src = "./hobbitSprite/hobbitRun10Left.png";

//still images for hobbit/movement frames

const hobbit = {
  xCoord: 25,
  yCoord: 385,
  height: 125,
  width: 125,
  speed: 0.09,
  moving: false,
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

function hobbitRunCycle1Right() {
  hobbit.run = hobbitRun2Right;
  hobbit.run = hobbitRun2Right;
}
function hobbitRunCycle2Right() {
  hobbit.run = hobbitRun3Right;
  hobbit.run = hobbitRun3Right;
}

function hobbitRunCycle3Right() {
  hobbit.run = hobbitRun4Right;
  hobbit.run = hobbitRun4Right;
}

function hobbitRunCycle4Right() {
  hobbit.run = hobbitRun5Right;
  hobbit.run = hobbitRun5Right;
}

function hobbitRunCycle5Right() {
  hobbit.run = hobbitRun6Right;
  hobbit.run = hobbitRun6Right;
}
function hobbitRunCycle6Right() {
  hobbit.run = hobbitRun7Right;
  hobbit.run = hobbitRun7Right;
}
function hobbitRunCycle7Right() {
  hobbit.run = hobbitRun8Right;
  hobbit.run = hobbitRun8Right;
}
function hobbitRunCycle8Right() {
  hobbit.run = hobbitRun9Right;
  hobbit.run = hobbitRun9Right;
}

function hobbitRunCycle9Right() {
  hobbit.run = hobbitRun10Right;
  hobbit.run = hobbitRun10Right;
}

function hobbitRunCycle10Right() {
  hobbit.run = hobbitRun1Right;
  hobbit.run = hobbitRun1Right;
}

function hobbitRunAnimateRight() {
  setTimeout(hobbitRunCycle1Right, 200);
  setTimeout(hobbitRunCycle2Right, 200);
  setTimeout(hobbitRunCycle3Right, 200);
  setTimeout(hobbitRunCycle4Right, 200);
  setTimeout(hobbitRunCycle5Right, 200);
  setTimeout(hobbitRunCycle6Right, 200);
  setTimeout(hobbitRunCycle7Right, 200);
  setTimeout(hobbitRunCycle8Right, 200);
  setTimeout(hobbitRunCycle9Right, 200);
  setTimeout(hobbitRunCycle10Right, 200);
}
//right running animation

function hobbitRunCycle1Left() {
  hobbit.run = hobbitRun2Left;
  hobbit.run = hobbitRun2Left;
}
function hobbitRunCycle2Left() {
  hobbit.run = hobbitRun3Left;
  hobbit.run = hobbitRun3Left;
}

function hobbitRunCycle3Left() {
  hobbit.run = hobbitRun4Left;
  hobbit.run = hobbitRun4Left;
}

function hobbitRunCycle4Left() {
  hobbit.run = hobbitRun5Left;
  hobbit.run = hobbitRun5Left;
}

function hobbitRunCycle5Left() {
  hobbit.run = hobbitRun6Left;
  hobbit.run = hobbitRun6Left;
}
function hobbitRunCycle6Left() {
  hobbit.run = hobbitRun7Left;
  hobbit.run = hobbitRun7Left;
}
function hobbitRunCycle7Left() {
  hobbit.run = hobbitRun8Left;
  hobbit.run = hobbitRun8Left;
}
function hobbitRunCycle8Left() {
  hobbit.run = hobbitRun9Left;
  hobbit.run = hobbitRun9Left;
}

function hobbitRunCycle9Left() {
  hobbit.run = hobbitRun10Left;
  hobbit.run = hobbitRun10Left;
}

function hobbitRunCycle10Left() {
  hobbit.run = hobbitRun1Left;
  hobbit.run = hobbitRun1Left;
}

function hobbitRunAnimateLeft() {
  setTimeout(hobbitRunCycle1Left, 200);
  setTimeout(hobbitRunCycle2Left, 200);
  setTimeout(hobbitRunCycle3Left, 200);
  setTimeout(hobbitRunCycle4Left, 200);
  setTimeout(hobbitRunCycle5Left, 200);
  setTimeout(hobbitRunCycle6Left, 200);
  setTimeout(hobbitRunCycle7Left, 200);
  setTimeout(hobbitRunCycle8Left, 200);
  setTimeout(hobbitRunCycle9Left, 200);
  setTimeout(hobbitRunCycle10Left, 200);
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
    hobbit.moving = true;
    setTimeout(hobbitRunAnimateLeft, 50);
    // hobbit.run = hobbitRun1Left;
    hobbit.xCoord -= hobbit.speed;
  }
  if ("ArrowRight" in keyClick) {
    hobbit.moving = true;
    // hobbit.run = hobbitRun1Right;
    setTimeout(hobbitRunAnimateRight, 50);
    hobbit.xCoord += hobbit.speed;
  }
  if (" " in keyClick) {
    if (hobbit.run === hobbitRun1Left && hobbit.yCoord === 385) {
      hobbit.yCoord = 365;
      hobbit.run = hobbitRun7Left;
      if ((hobbit.yCoord = 365)) {
        setTimeout(hobbitJumpResetLeft, 375);
      }
    }

    if (hobbit.run === hobbitRun1Right && hobbit.yCoord === 385) {
      hobbit.yCoord = 365;
      hobbit.run = hobbitRun7Right;

      if ((hobbit.yCoord = 365)) {
        setTimeout(hobbitJumpResetRight, 375);
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
