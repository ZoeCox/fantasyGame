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

const hobbitRun2 = new Image();
hobbitRun2.ready = false;
hobbitRun2.onload = checkIfReady;
hobbitRun2.src = "./hobbitSprite/hobbitRun2.png";

const hobbitRun3 = new Image();
hobbitRun3.ready = false;
hobbitRun3.onload = checkIfReady;
hobbitRun3.src = "./hobbitSprite/hobbitRun3.png";

const hobbitRun4 = new Image();
hobbitRun4.ready = false;
hobbitRun4.onload = checkIfReady;
hobbitRun4.src = "./hobbitSprite/hobbitRun4.png";

const hobbitRun5 = new Image();
hobbitRun5.ready = false;
hobbitRun5.onload = checkIfReady;
hobbitRun5.src = "./hobbitSprite/hobbitRun5.png";

const hobbitRun6 = new Image();
hobbitRun6.ready = false;
hobbitRun6.onload = checkIfReady;
hobbitRun6.src = "./hobbitSprite/hobbitRun6.png";

const hobbitRun7Right = new Image();
hobbitRun7Right.ready = false;
hobbitRun7Right.onload = checkIfReady;
hobbitRun7Right.src = "./hobbitSprite/hobbitRun7Right.png";

const hobbitRun7Left = new Image();
hobbitRun7Left.ready = false;
hobbitRun7Left.onload = checkIfReady;
hobbitRun7Left.src = "./hobbitSprite/hobbitRun7Left.png";

const hobbitRun8 = new Image();
hobbitRun8.ready = false;
hobbitRun8.onload = checkIfReady;
hobbitRun8.src = "./hobbitSprite/hobbitRun8.png";

const hobbitRun9 = new Image();
hobbitRun9.ready = false;
hobbitRun9.onload = checkIfReady;
hobbitRun9.src = "./hobbitSprite/hobbitRun9.png";

const hobbitRun10 = new Image();
hobbitRun10.ready = false;
hobbitRun10.onload = checkIfReady;
hobbitRun10.src = "./hobbitSprite/hobbitRun10.png";

const hobbit = {
  xCoord: 25,
  yCoord: 385,
  height: 125,
  width: 125,
  speed: 0.2,
  moving: false,
  run: hobbitRun1Right,
};

function backGroundScroll() {}

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
  },
  false
);

let countdown = 600;

function hobbitJumpResetRight() {
  hobbit.yCoord = 385;
  hobbit.run = hobbitRun1Right;
}

function hobbitJumpResetLeft() {
  hobbit.yCoord = 385;
  hobbit.run = hobbitRun1Left;
}

function playerMove() {
  function timerReduce() {
    countdown = countdown - 60;
  }

  if ("ArrowLeft" in keyClick) {
    hobbit.moving = true;
    hobbit.run = hobbitRun1Left;
    hobbit.xCoord -= hobbit.speed;
  }
  if ("ArrowRight" in keyClick) {
    hobbit.moving = true;
    hobbit.run = hobbitRun1Right;
    hobbit.xCoord += hobbit.speed;
  }
  //   if (hobbit.moving) {
  //     if (hobbit.run === hobbitRun1) {
  //       hobbit.run = hobbitRun7;
  //     } else {
  //       hobbit.run = hobbitRun1;
  //     }
  //   }
  if (" " in keyClick) {
    let spacePressedIn = Date.now();
    hobbit.yCoord = 365;
    hobbit.run = hobbitRun7Right;
    if (" " in keyClick && "ArrowLeft" in keyClick) {
      hobbit.run = hobbitRun7Left;
    }
    if ((hobbit.yCoord = 365 || Date.now() >= spacePressedIn + 500)) {
      setTimeout(hobbitJumpResetRight, 375);
    }
    if ((hobbit.yCoord = 365 && hobbit.run === hobbitRun7Left)) {
      setTimeout(hobbitJumpResetLeft, 375);
    }

    //can get working this way so we know if spacebar held for a bit longer than jump length it ground the player
    // if (hobbit.moving) {
    //   footstepSound.play();
    // }
  }
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

  context.drawImage(treeBackground, 0, 0, 1000, 500);
  context.drawImage(
    hobbit.run,
    hobbit.xCoord,
    hobbit.yCoord,
    hobbit.width,
    hobbit.height
  );
}

document.body.appendChild(canvas);
