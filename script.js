const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");

const treeBackground = new Image();
treeBackground.ready = false;
treeBackground.onload = checkIfReady;
treeBackground.src = "./backGround/treeBackground.png";

const blueBird = new Image();
blueBird.ready = false;
blueBird.onload = checkIfReady;
blueBird.src = "./enemySprites/bird.png";

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

const hobbitRun6Right = new Image();
hobbitRun6Right.ready = false;
hobbitRun6Right.onload = checkIfReady;
hobbitRun6Right.src = "./hobbitSprite/hobbitRun6Right.png";

const hobbitRun6Left = new Image();
hobbitRun6Left.ready = false;
hobbitRun6Left.onload = checkIfReady;
hobbitRun6Left.src = "./hobbitSprite/hobbitRun6Left.png";

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

const hobbitIdle1 = new Image();
hobbitIdle1.ready = false;
hobbitIdle1.onload = checkIfReady;
hobbitIdle1.src = "./hobbitSprite/hobbitIdle1.png";

const hobbitIdle2 = new Image();
hobbitIdle2.ready = false;
hobbitIdle2.onload = checkIfReady;
hobbitIdle2.src = "./hobbitSprite/hobbitIdle2.png";

const hobbitIdle3 = new Image();
hobbitIdle3.ready = false;
hobbitIdle3.onload = checkIfReady;
hobbitIdle3.src = "./hobbitSprite/hobbitIdle3.png";

const hobbitIdle4 = new Image();
hobbitIdle4.ready = false;
hobbitIdle4.onload = checkIfReady;
hobbitIdle4.src = "./hobbitSprite/hobbitIdle4.png";

//hobbit idle

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

const charIdleFrameX = [0, 64, 128, 192];

// const charRunRightFrameX = [25, 105, 185, 270, 345, 425, 510, 590];
const charRunRightFrameX = [25];

const charRunLeftFrameX = [640, 560, 480, 320, 240, 160, 80, 0];

const character = {
  // source: characterIdle,
  // frameX: charIdleFrameX[0],
  source: characterRunRight,
  frameX: charRunRightFrameX[0],
  frameY: 0,
  sourceWidth: 70,
  sourceHeight: 70,
  xCoord: 120,
  yCoord: 390,
  width: 75,
  height: 75,
  speed: 0.075,
  movingLeft: false,
  movingRight: false,
};

function characterAnimate(arrFrame) {
  let directionArr;
  if (character.movingLeft) {
    character.source = characterRunLeft;
    directionArr = charRunLeftFrameX;
  } else if (character.movingRight) {
    character.source = characterRunRight;
    directionArr = charRunRightFrameX;
  }

  //  else {
  //   character.source = characterIdle;
  //   directionArr = charIdleFrameX;
  //   character.sourceWidth = 70;
  // }
  const checkedNextFrame = arrFrame < charIdleFrameX.length ? arrFrame : 0;
  character.frameX = charIdleFrameX[checkedNextFrame];
  const nextAnimateFrame = checkedNextFrame + 1;
  const animationTime = 1600 / charIdleFrameX.length;
  setTimeout(() => characterAnimate(nextAnimateFrame), animationTime);
}
characterAnimate(0);

// function characterAnimate(arrFrame) {
//   const checkedNextFrame = arrFrame < charIdleFrameX.length ? arrFrame : 0;
//   character.frameX = charIdleFrameX[checkedNextFrame];
//   const nextAnimateFrame = checkedNextFrame + 1;
//   const animationTime = 1000 / charIdleFrameX.length;
//   setTimeout(() => characterAnimate(nextAnimateFrame), animationTime);
// }
// characterAnimate(0);

const hobbit = {
  xCoord: 25,
  yCoord: 385,
  //xcoord 25
  height: 125,
  width: 125,
  speed: 0.075,
  hobbitMovingRight: false,
  hobbitMovingLeft: false,
  run: hobbitRun1Right,
};

const bird = {
  frame: blueBird,
  height: 27,
  width: 27,
  xCoord: 350,
  yCoord: 438,
};

const movementArrIdle = [hobbitIdle1, hobbitIdle2, hobbitIdle3, hobbitIdle4];

const movementArrRight = [
  hobbitRun1Right,
  hobbitRun2Right,
  hobbitRun3Right,
  hobbitRun4Right,
  hobbitRun5Right,
  hobbitRun6Right,
  hobbitRun7Right,
  hobbitRun8Right,
  hobbitRun9Right,
  hobbitRun10Right,
];

const movementArrLeft = [
  hobbitRun1Left,
  hobbitRun2Left,
  hobbitRun3Left,
  hobbitRun4Left,
  hobbitRun5Left,
  hobbitRun6Left,
  hobbitRun7Left,
  hobbitRun8Left,
  hobbitRun9Left,
  hobbitRun10Left,
];

function hobbitAnimate(arrFrame) {
  let directionArr;
  if (hobbit.movingLeft) {
    directionArr = movementArrLeft;
  } else if (hobbit.movingRight) {
    directionArr = movementArrRight;
  } else {
    directionArr = movementArrIdle;
  }
  const checkedNextFrame = arrFrame < directionArr.length ? arrFrame : 0;
  hobbit.run = directionArr[checkedNextFrame];

  const nextAnimateFrame = checkedNextFrame + 1;
  const animationTime = 1250 / directionArr.length;
  setTimeout(() => hobbitAnimate(nextAnimateFrame), animationTime);
}
hobbitAnimate(0);

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

function characterMove() {
  if ("a" in keyClick) {
    character.xCoord -= character.speed;
    character.movingLeft = true;
  }
  if ("d" in keyClick) {
    character.xCoord += character.speed;
    character.movingRight = true;
  }
  //left and right movement
}

function edgeCollisionDetect() {
  const hobbitLeadingRight = hobbit.xCoord + 70;
  const hobbitLeadingLeft = hobbit.xCoord + 60;
  const doesHobCollideRightWall = hobbitLeadingRight >= canvas.width;
  const doesHobCollideLeftWall = hobbitLeadingLeft <= 0;
  if (doesHobCollideRightWall) {
    console.log("you've hit the right edge");
    hobbit.xCoord = hobbit.xCoord - 30;
  }
  if (doesHobCollideLeftWall) {
    console.log("you've hit the left edge");
    hobbit.xCoord = hobbit.xCoord + 30;
  }
  //edge detection
}

function birdCollisionDetect() {
  const doesHobCollideBirdLeft =
    hobbit.xCoord >= bird.xCoord - 50 && hobbit.xCoord < bird.xCoord - 70;
  // const doesHobCollideBirdRight =
  //   hobbit.xCoord < bird.xCoord + 50 && hobbit.xCoord > bird.xCoord;
  if (doesHobCollideBirdLeft) {
    console.log("you hit the bird ");
  }
}

function playerJump() {
  hobbit.yCoord = 350;
  setTimeout(function () {
    hobbit.yCoord = 385;
  }, 400);
}

function characterJump() {
  character.yCoord = 350;
  bird.yCoord = 350;
  setTimeout(function () {
    character.yCoord = 390;
    bird.yCoord = 385 + 53;
    //just for fun but remove bird soon
  }, 400);
}

//jump handling

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    playerJump();
    characterJump();
  }
});

document.addEventListener(
  "keyup",
  function (event) {
    delete keyClick[event.key];
    hobbit.movingRight = false;
    hobbit.movingLeft = false;
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
  playerMove();
  characterMove();
  edgeCollisionDetect();
  birdCollisionDetect();
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
  context.drawImage(
    bird.frame,
    0,
    0,
    45,
    35,
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
}

document.body.appendChild(canvas);
