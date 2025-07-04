const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");
let tutorialComplete = false;

const hillBackground = new Image();
hillBackground.ready = false;
hillBackground.onload = checkIfReady;
hillBackground.src = "./backGround/hillBackground.png";

const treeBackground = new Image();
treeBackground.ready = false;
treeBackground.onload = checkIfReady;
treeBackground.src = "./backGround/treeBackground.png";

const forestSign = new Image();
forestSign.ready = false;
forestSign.onload = checkIfReady;
forestSign.src = "./backGround/forestSign.png";

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

const boundaries = {
  floor: 446,
  rightWall: canvas.width,
  leftWall: 0,
};

const backGround = {
  source: hillBackground,
  xCoord: 0,
  yCoord: 0,
  width: 800,
  height: 500,
};

const forestSignpost = {
  xCoord: 435,
  yCoord: 405,
  width: 70,
  height: 70,
};

const charIdleFrameX = [0, 64, 128, 192];
const charRunRightFrameX = [25, 105, 185, 270, 345, 425, 510, 590];
const charRunLeftFrameX = [579, 499, 419, 339, 258, 179, 97, 18];
const charJumpRightFrameX = [
  11, 74, 139, 196, 259, 325, 390, 455, 518, 585, 651, 714, 780, 843, 907,
];

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
  name: "",
  nameInputDone: false,
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

const birdIdleLeftFrameX = [437, 487];
const birdIdleLeftYVal = 129;
const birdFlyLeftFrameX = [339, 287, 239];
const birdFlyLeftYVal = 160;

const bird = {
  source: birdLeft,
  frameX: birdIdleLeftFrameX[0],
  frameY: birdIdleLeftYVal,
  sourceWidth: 45,
  sourceHeight: 35,
  height: 40,
  width: 45,
  xCoord: 403,
  yCoord: 415,
  speed: 0.15,
  birdIntroDone: false,
  jumpIntroDone: false,
};

function birdAnimate(arrFrame) {
  let directionArr;
  if (bird.jumpIntroDone) {
    bird.frameY = birdFlyLeftYVal;
    directionArr = birdFlyLeftFrameX;
  } else {
    directionArr = birdIdleLeftFrameX;
    bird.frameY = birdIdleLeftYVal;
  }
  const checkedNextFrame = arrFrame < directionArr.length ? arrFrame : 0;
  bird.frameX = directionArr[checkedNextFrame];
  const nextAnimateFrame = checkedNextFrame + 1;
  let animationTime = 1175 / directionArr.length;
  setTimeout(() => birdAnimate(nextAnimateFrame), animationTime);
}
birdAnimate(0);

function birdFlight() {
  bird.xCoord -= bird.speed;
  bird.yCoord -= bird.speed;
  if (bird.xCoord < -50) {
    bird.speed = 0;
  }
}

const speechbox = {
  text: "Type out your name and press 'enter' ",
  nameHolder: `Name (8 letters or less): ${character.name}`,
  textXCoord: 80,
  textYCoord: 100,
  boxXCoord: 75,
  boxYCoord: 47.5,
  width: 350,
  height: 100,
};

const keyExceptionArr = [
  "ArrowLeft",
  "ArrowRight",
  " ",
  "Shift",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "Control",
  "CapsLock",
  undefined,
];

function nameCapture(event) {
  let keyPress;
  keyPress = event.key;
  if (keyPress === "Backspace") {
    character.name = character.name.substring(0, character.name.length - 1);
    keyPress = "";
    return;
  }
  for (let i = 0; i < keyExceptionArr.length; i++) {
    if (keyPress === keyExceptionArr[i]) {
      return;
    }
  }
  if (
    keyPress !== "Enter" &&
    character.name.length <= 8 &&
    !bird.birdIntroDone &&
    !character.nameInputDone
  ) {
    character.name += keyPress;
  }
  if (character.name.length > 8) {
    speechbox.text = "Name is longer than 8 letters, please backspace.";
    keyPress = "";
  }
  if (
    keyPress === "Enter" &&
    !bird.birdIntroDone &&
    character.name.length <= 8
  ) {
    speechbox.text = `${character.name}, use the arrow keys to go to the bird.`;
    character.nameInputDone = true;
  }
  console.log("nameinput on");
  if (character.nameInputDone) {
    document.removeEventListener("keydown", nameCapture);
    console.log("name input is turned off");
  }
}

document.addEventListener("keydown", nameCapture);
//name entering details

const keyClick = {};

function keyCapture(event) {
  keyClick[event.key] = true;
}

document.addEventListener("keydown", keyCapture, false);
//movement/general keyCapture details

function characterMove() {
  if ("ArrowLeft" in keyClick) {
    character.xCoord -= character.speed;
    character.movingLeft = true;
    document.removeEventListener("keydown", jumpTrigger);
  }
  if ("ArrowRight" in keyClick) {
    character.xCoord += character.speed;
    character.movingRight = true;
    document.removeEventListener("keydown", jumpTrigger);
  }
  //left and right movement
}

let spaceKeyReleased = false;

function jumpTravel() {
  character.xCoord += 10;
  character.yCoord += 10;
  setTimeout(() => {
    character.xCoord += 10;
    character.yCoord -= 10;
  }, 50);
}

function characterJump() {
  spaceKeyReleased = false;
  character.yCoord = 345;
  jumpTravel();
  character.jumping = true;
  if (character.jumping) {
    document.removeEventListener("keydown", keyCapture);
    character.speed = 0;
  }
  setTimeout(function () {
    character.yCoord = 378;
    character.jumping = false;
    if (!character.jumping) {
      document.addEventListener("keydown", keyCapture);
      character.speed = 0.5;
    }
  }, 900);
}
function jumpTrigger(event) {
  if (event.key === " " && spaceKeyReleased) {
    characterJump();
  }
}

document.addEventListener("keydown", jumpTrigger);

function spaceBarRelease(event) {
  if (event.key === " ") {
    setTimeout(() => (spaceKeyReleased = true), 200);
  }
}
document.addEventListener("keyup", spaceBarRelease);
//jump handling

function edgeCollisionDetect() {
  const characterLeadingRight = character.xCoord + 30;
  const characterLeadingLeft = character.xCoord;
  const doesCharCollideRightWall =
    characterLeadingRight >= boundaries.rightWall;
  const doesCharCollideLeftWall = characterLeadingLeft <= boundaries.leftWall;
  if (doesCharCollideRightWall) {
    character.speed = 0;
    if ("ArrowLeft" in keyClick) {
      character.speed = 0.5;
    }
  }
  if (doesCharCollideLeftWall) {
    character.speed = 0;
    if ("ArrowRight" in keyClick) {
      character.speed = 0.5;
    }
  }
}
//edge detection

function speechBoxFill(textString, timeoutLength) {
  setTimeout(() => {
    speechbox.text = textString;
  }, timeoutLength);
}

function birdCollisionDetect() {
  const characterLeadingRight = character.xCoord + 50;
  const characterLeadingLeft = character.xCoord;
  const doesCharCollideRightWall =
    characterLeadingRight >= boundaries.rightWall;
  const doesCharCollideLeftWall = characterLeadingLeft <= boundaries.leftWall;
  //fix this mess of additional variables into something more organised
  //does this need to be duplicated across two different functions???
  const birdLeadingLeft = bird.xCoord - 15;
  // const birdTop = bird.yCoord + bird.width;
  const doesCharCollideBird = characterLeadingRight >= birdLeadingLeft;
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
  if (doesCharCollideBird && !bird.birdIntroDone && character.nameInputDone) {
    character.speed = 0;
    setTimeout(birdShout, 200);
    bird.birdIntroDone = true;
    if ("ArrowLeft" in keyClick) {
      character.speed = 0.5;
    }
  } else if (doesCharCollideBird) {
    character.speed = 0;
    if ("ArrowLeft" in keyClick && !doesCharCollideLeftWall) {
      character.speed = 0.5;
    }
    if (
      "ArrowRight" in keyClick &&
      bird.jumpIntroDone &&
      !doesCharCollideRightWall
    ) {
      character.speed = 0.5;
    }
  }
}

function playerJumpIntro() {
  if (!bird.jumpIntroDone && bird.birdIntroDone && " " in keyClick) {
    speechBoxFill("Bob says: 'Oh - you know how to jump now!'", 2000);
    speechBoxFill("Bob says: 'I think you might be ready.'", 5000);
    speechBoxFill("Bob says: 'I need someone nimble to help me-'", 8000);
    speechBoxFill("Bob says: '-to find my treasure. Will you help?'", 11000);
    speechBoxFill("Press 'enter' if you want to help.", 14000);
  }
  if ("Enter" in keyClick && bird.birdIntroDone && !bird.jumpIntroDone) {
    speechBoxFill(
      `Bob says: 'Thank you for your bravery, ${character.name}'`,
      1000
    );
    speechBoxFill("Bob says: 'Goodbye, I will see you again soon...'", 5000);
    setTimeout(() => {
      bird.jumpIntroDone = true;
    }, 7000);
    speechBoxFill(`${character.name}, follow the sign to the forest`, 8000);
  }
}

function keyRelease(event) {
  delete keyClick[event.key];
  character.movingRight = false;
  character.movingLeft = false;
  document.addEventListener("keydown", jumpTrigger);
}

document.addEventListener("keyup", keyRelease, false);
//key release/clearing

function forestTransition() {
  backGround.source = treeBackground;
  character.xCoord = 50;
  character.yCoord = 374;
  forestSignpost.xCoord = -150;
  speechbox.text = "You have completed the demo";
  tutorialComplete = true;
}

function checkIfReady() {
  this.ready = true;
  playGame();
}

function playGame() {
  characterMove();
  edgeCollisionDetect();
  birdCollisionDetect();
  playerJumpIntro();
  if (bird.jumpIntroDone) {
    birdFlight();
  }
  if (
    bird.jumpIntroDone &&
    !tutorialComplete &&
    character.xCoord + 50 >= canvas.width
  ) {
    forestTransition();
  }
  render();
  requestAnimationFrame(playGame);
}

function render() {
  context.fillStyle = "antiqueWhite";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    backGround.source,
    backGround.xCoord,
    backGround.yCoord,
    backGround.width,
    backGround.height
  );
  context.drawImage(
    forestSign,
    forestSignpost.xCoord,
    forestSignpost.yCoord,
    forestSignpost.width,
    forestSignpost.height
  );
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
  context.font = "16px georgia";
  context.fillStyle = "black";
  let nameText = speechbox.nameHolder + character.name;
  if (character.nameInputDone) {
    nameText = "";
  }
  context.fillText(nameText, 80, 125);
}

document.body.appendChild(canvas);
