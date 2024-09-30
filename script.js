const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");

// const treeBackground = new Image();
// treeBackground.ready = false;
// treeBackground.onload = checkIfReady;
// treeBackground.src = "./backGround/treeBackground.png";

// const winterBackground = new Image();
// winterBackground.ready = false;
// winterBackground.onload = checkIfReady;
// winterBackground.src = "./backGround/winterBackground.gif";

const hillBackground = new Image();
hillBackground.ready = false;
hillBackground.onload = checkIfReady;
hillBackground.src = "./backGround/hillBackground.png";

const birdRight = new Image();
birdRight.ready = false;
birdRight.onload = checkIfReady;
birdRight.src = "./enemySprites/birdRight.png";

const birdLeft = new Image();
birdLeft.ready = false;
birdLeft.onload = checkIfReady;
birdLeft.src = "./enemySprites/birdLeft.png";

const characterIdle = new Image();
characterIdle.ready = false;
characterIdle.onload = checkIfReady;
characterIdle.src = "./characterSprite/characterIdle.png";

const characterRunRight = new Image();
characterRunRight.ready = false;
characterRunRight.onload = checkIfReady;
characterRunRight.src = "./characterSprite/characterRunRight.png";

const characterRunLeft = new Image();
characterRunLeft.ready = false;
characterRunLeft.onload = checkIfReady;
characterRunLeft.src = "./characterSprite/characterRunLeft.png";

const characterJumpRight = new Image();
characterJumpRight.ready = false;
characterJumpRight.onload = checkIfReady;
characterJumpRight.src = "./characterSprite/characterJumpRight.png";

const charIdleFrameX = [0, 64, 128, 192];
const charRunRightFrameX = [25, 105, 185, 270, 345, 425, 510, 590];
const charRunLeftFrameX = [579, 499, 419, 339, 258, 179, 97, 18];
const charJumpRightFrameX = [
  11, 74, 139, 196, 259, 325, 390, 455, 518, 585, 651, 714, 780, 843, 907,
];
// const charJumpRightFrameX = [74, 196, 518, 651, 907];

const character = {
  source: characterIdle,
  frameX: charIdleFrameX[0],
  frameY: 0,
  sourceWidth: 50,
  sourceHeight: 70,
  xCoord: 50,
  yCoord: 378,
  width: 70,
  height: 100,
  speed: 0.5,
  movingLeft: false,
  movingRight: false,
  jumping: false,
  name: undefined,
};
// character.name = prompt("What is your name?");
//IMPORTANT - REACTIVATE SOON

const birdIdleLeftFrameX = [437, 487];
const birdIdleLeftYVal = 129;

const bird = {
  source: birdLeft,
  frameX: birdIdleLeftFrameX[0],
  frameY: birdIdleLeftYVal,
  sourceWidth: 45,
  sourceHeight: 35,
  height: 44,
  width: 45,
  xCoord: 404,
  yCoord: 415,
};

const speechbox = {
  text: "Use the arrow keys to approach the bird.",
  textXCoord: 80,
  textYCoord: 100,
  boxXCoord: 75,
  boxYCoord: 47.5,
  width: 350,
  height: 100,
};

function characterAnimate(arrFrame) {
  let directionArr;
  if (character.movingLeft) {
    character.source = characterRunLeft;
    directionArr = charRunLeftFrameX;
  } else if (character.movingRight) {
    character.source = characterRunRight;
    directionArr = charRunRightFrameX;
  } else if (character.jumping) {
    character.source = characterJumpRight;
    directionArr = charJumpRightFrameX;
  } else {
    character.source = characterIdle;
    directionArr = charIdleFrameX;
  }
  const checkedNextFrame = arrFrame < directionArr.length ? arrFrame : 0;
  character.frameX = directionArr[checkedNextFrame];
  const nextAnimateFrame = checkedNextFrame + 1;
  let animationTime = 1600 / directionArr.length;
  if (directionArr === charJumpRightFrameX) {
    animationTime = 1500 / directionArr.length;
  }
  setTimeout(() => characterAnimate(nextAnimateFrame), animationTime);
}
characterAnimate(0);

function birdAnimate(arrFrame) {
  const checkedNextFrame = arrFrame < birdIdleLeftFrameX.length ? arrFrame : 0;
  bird.frameX = birdIdleLeftFrameX[checkedNextFrame];
  const nextAnimateFrame = checkedNextFrame + 1;
  const animationTime = 1175 / birdIdleLeftFrameX.length;
  setTimeout(() => birdAnimate(nextAnimateFrame), animationTime);
}
birdAnimate(0);

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
  },
  false
);

function characterMove() {
  if ("ArrowLeft" in keyClick) {
    character.xCoord -= character.speed;
    character.movingLeft = true;
  }
  if ("ArrowRight" in keyClick) {
    character.xCoord += character.speed;
    character.movingRight = true;
  }
  //left and right movement
}

function edgeCollisionDetect() {
  const characterLeadingRight = character.xCoord + 30;
  const characterLeadingLeft = character.xCoord;
  const doesCharCollideRightWall = characterLeadingRight >= canvas.width;
  const doesCharCollideLeftWall = characterLeadingLeft <= 0;
  if (doesCharCollideRightWall) {
    console.log("you've hit the right edge");
    character.speed = 0;
    if ("ArrowLeft" in keyClick) {
      character.speed = 0.5;
    }
  }
  if (doesCharCollideLeftWall) {
    console.log("you've hit the left edge");
    character.speed = 0;
    if ("ArrowRight" in keyClick) {
      character.speed = 0.5;
    }
  }
  //edge detection
}

let birdIntroDone = false;
let jumpIntroDone = false;

function speechBoxFill(textString, timeoutLength) {
  setTimeout(() => {
    speechbox.text = textString;
  }, timeoutLength);
}

function birdCollisionDetect() {
  const birdLeadingLeft = bird.xCoord - 15;
  const charLeadingRight = character.xCoord + 50;
  const doesCharCollideBird =
    charLeadingRight >= birdLeadingLeft && character.xCoord <= bird.yCoord * 2;
  const birdShout = () => {
    speechbox.text = "Bird says: 'Ow! You hit me!'";
    speechBoxFill("Bird says: 'That wasn't very polite...'", 3000);
    speechBoxFill("Bird says: 'You don't even ask a chap his name-'", 6000);
    speechBoxFill("Bird says: '-and you go running into him!'", 9000);
    speechBoxFill("Bird says: 'The name is Bob.'", 12000);
    speechBoxFill("Bob says: 'And what is yours?'", 15000);
    speechBoxFill("Bob waits a few seconds in silence.", 18000);
    speechBoxFill(`Bob says: 'Well, ${character.name} is an odd name-'`, 21000);
    speechBoxFill("Bob says: 'but I've heard stranger...'", 24000);
    speechBoxFill("", 27000);
    speechBoxFill(`${character.name}, press the space bar to jump.`, 29000);
  };
  if (doesCharCollideBird && !birdIntroDone) {
    console.log("you hit the bird ");
    character.speed = 0;
    setTimeout(birdShout, 200);
    birdIntroDone = true;
    if ("ArrowLeft" in keyClick) {
      character.speed = 0.5;
    }
  } else if (doesCharCollideBird) {
    character.speed = 0;
    if ("ArrowLeft" in keyClick) {
      character.speed = 0.5;
    }
  }
}

function characterJump() {
  let jumpTimeout = 1000;
  character.yCoord = 345;
  character.jumping = true;
  setTimeout(function () {
    character.yCoord = 378;
    character.jumping = false;
  }, jumpTimeout);
}
//jump handling

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    characterJump();
  }
});

function playerJumpIntro() {
  if (!jumpIntroDone && birdIntroDone && " " in keyClick) {
    speechBoxFill("Bob says: 'Oh - you know how to jump now!'", 2000);
    console.log("you jumped");
    speechBoxFill("Bob says: 'I think you might be ready.'", 5000);
    speechBoxFill("Bob says: 'I need someone nimble to help me-'", 8000);
    speechBoxFill("Bob says: '-to find my treasure. Will you help?'", 11000);
    jumpIntroDone = true;
  }
}

document.addEventListener(
  "keyup",
  function (event) {
    delete keyClick[event.key];
    character.movingRight = false;
    character.movingLeft = false;
  },
  false
);

function checkIfReady() {
  this.ready = true;
  playGame();
}

function playGame() {
  characterMove();
  edgeCollisionDetect();
  birdCollisionDetect();
  playerJumpIntro();
  render();
  requestAnimationFrame(playGame);
}

function render() {
  context.fillStyle = "antiqueWhite";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.drawImage(hillBackground, 0, 0, 800, 500);
  context.drawImage(
    bird.source,
    bird.frameX,
    bird.frameY,
    bird.sourceWidth,
    bird.sourceHeight,
    bird.xCoord,
    bird.yCoord,
    bird.height,
    bird.width
  );

  context.drawImage(
    character.source,
    character.frameX,
    character.frameY,
    character.sourceWidth,
    character.sourceHeight,
    character.xCoord,
    character.yCoord,
    character.width,
    character.height
  );
  context.fillStyle = "#CBC1AE";
  context.fillRect(
    speechbox.boxXCoord,
    speechbox.boxYCoord,
    speechbox.width,
    speechbox.height
  );
  context.font = "16px georgia";
  context.fillStyle = "black";
  context.fillText(speechbox.text, speechbox.textXCoord, speechbox.textYCoord);
}

document.body.appendChild(canvas);
