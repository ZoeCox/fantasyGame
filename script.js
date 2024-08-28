const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");

const treeBackground = new Image();
treeBackground.ready = false;
treeBackground.onload = checkIfReady;
treeBackground.src = "./backGround/treeBackground.png";

const hobbitRun1 = new Image();
hobbitRun1.ready = false;
hobbitRun1.onload = checkIfReady;
hobbitRun1.src = "./hobbitSprite/hobbitRun1.png";

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

const hobbitRun7 = new Image();
hobbitRun7.ready = false;
hobbitRun7.onload = checkIfReady;
hobbitRun7.src = "./hobbitSprite/hobbitRun7.png";

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
  speed: 0.1,
  moving: false,
  run: hobbitRun1,
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

function hobbitJumpReset() {
  hobbit.yCoord = 385;
  hobbit.run = hobbitRun1;
}

function playerMove() {
  function timerReduce() {
    countdown = countdown - 60;
  }

  if ("ArrowLeft" in keyClick) {
    hobbit.moving = true;
    hobbit.xCoord -= hobbit.speed;
  }
  if ("ArrowRight" in keyClick) {
    hobbit.moving = true;
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
    hobbit.run = hobbitRun7;
    if ((hobbit.yCoord = 365 || Date.now() >= spacePressedIn + 500)) {
      setTimeout(hobbitJumpReset, 375);
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
