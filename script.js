const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const footstepSound = document.querySelector(".footstep-sound");

const treeBackground = new Image();
treeBackground.ready = false;
treeBackground.onload = checkIfReady;
treeBackground.src = "./backGround/treeBackground.png";

const hillBackground = new Image();
hillBackground.ready = false;
hillBackground.onload = checkIfReady;
hillBackground.src = "./backGround/hillBackground.png";

const winterBackground = new Image();
winterBackground.ready = false;
winterBackground.onload = checkIfReady;
winterBackground.src = "./backGround/winterBackground.gif";

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

const charIdleFrameX = [0, 64, 128, 192];
const charRunRightFrameX = [25, 105, 185, 270, 345, 425, 510, 590];
const charRunLeftFrameX = [579, 499, 419, 339, 258, 179, 97, 18];

const character = {
  source: characterIdle,
  frameX: charIdleFrameX[0],
  frameY: 0,
  sourceWidth: 70,
  sourceHeight: 70,
  xCoord: 50,
  yCoord: 378,
  width: 100,
  height: 100,
  speed: 0.5,
  movingLeft: false,
  movingRight: false,
  name: undefined,
};

// const birdIdleLeftFrameX = [244, 295, 339, 388, 437, 487];
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

function characterAnimate(arrFrame) {
  let directionArr;
  if (character.movingLeft) {
    character.source = characterRunLeft;
    directionArr = charRunLeftFrameX;
  } else if (character.movingRight) {
    character.source = characterRunRight;
    directionArr = charRunRightFrameX;
  } else {
    character.source = characterIdle;
    directionArr = charIdleFrameX;
  }
  const checkedNextFrame = arrFrame < directionArr.length ? arrFrame : 0;
  character.frameX = directionArr[checkedNextFrame];
  const nextAnimateFrame = checkedNextFrame + 1;
  const animationTime = 1600 / directionArr.length;
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
  const characterLeadingLeft = character.xCoord - 5;
  const doesCharCollideRightWall = characterLeadingRight >= canvas.width;
  const doesCharCollideLeftWall = characterLeadingLeft <= 0;
  if (doesCharCollideRightWall) {
    console.log("you've hit the right edge");
    // character.xCoord = character.xCoord - 30;
  }
  if (doesCharCollideLeftWall) {
    console.log("you've hit the left edge");
    // character.xCoord = character.xCoord + 30;
    character.speed = 0;
  } else {
    character.speed = 0.5;
  }
  //edge detection
}

let birdIntroDone = false;

function birdCollisionDetect() {
  const birdLeadingLeft = bird.xCoord - 15;
  const charLeadingRight = character.xCoord + 40;
  const doesCharCollideBirdLeft = charLeadingRight >= birdLeadingLeft;
  const birdShout = () => {
    alert("Bird says: 'Ow! You hit me!!!'");
    alert(
      "Bird says: 'That wasn't very polite... you don't even ask a fellow his name and you go running into him! The name is Bob, seeing as you refuse to ask.'"
    );
    alert("The bird waits a few moments as you stare at him in silence.");
    character.name = prompt("Bird says: 'Well, what is your name then?'");
    alert(
      `Bird says: 'Well, ${character.name} is an odd name, but I've heard stranger...'`
    );
  };
  if (doesCharCollideBirdLeft && !birdIntroDone) {
    console.log("you hit the bird ");
    character.xCoord -= 100;
    setTimeout(birdShout, 200);
    birdIntroDone = true;
  } else if (doesCharCollideBirdLeft) {
    character.xCoord -= 100;
  }
}

function characterJump() {
  character.yCoord = 345;
  setTimeout(function () {
    character.yCoord = 378;
  }, 400);
}
//jump handling

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    characterJump();
  }
});

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
  // context.fillStyle = "#CBC1AE";
  // context.fillRect(100, 47.5, 300, 100);
  // context.font = "22px sans-serif";
  // context.fillStyle = "black";
  // context.fillText("Hello", 105, 85);
}

document.body.appendChild(canvas);
