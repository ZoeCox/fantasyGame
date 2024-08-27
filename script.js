const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const hobbit = {
    xCoord: 25,
    yCoord: 385, 
    height: 125, 
    width: 125,
    speed: 0.15,
    moving: false
}

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

const hobbitRunFrames = [hobbitRun1, hobbitRun2, hobbitRun3, hobbitRun4, hobbitRun5, 
    hobbitRun6, hobbitRun7, hobbitRun8, hobbitRun9, hobbitRun10]

function backGroundScroll () {};

const keyClick = {};

document.addEventListener(
  "keydown",
  function (event) {
    keyClick[event.key] = true;
  },
  false,
);

function playerMove () {
    if("ArrowLeft" in keyClick) {
        hobbit.xCoord -= hobbit.speed; 
        hobbit.moving = true;
    }
    if("ArrowRight" in keyClick) {
        hobbit.xCoord += hobbit.speed; 
        hobbit.moving = true;
    }
    // if(hobbit.xCoord == canvas.width -50) {
    //     hobbit.xCoord = 200;
    // }
    //sort out some form of edge collision detection
}

document.addEventListener(
    "keyup",
    function (event) {
      delete keyClick[event.key];
    },
    false,
    hobbit.moving = true
  );
  

// function hobbitRunning () {
//   for(let i=0; i < hobbitRunFrames.length; i++) {
//         context.drawImage(hobbitRunFrames, hobbit.xCoord, hobbit.yCoord, hobbit.width, hobbit.height);
//     }
//     requestAnimationFrame(hobbitRunning)
// }



function checkIfReady() {
    this.ready = true
    playGame();
}

function playGame() {
    playerMove();
    // if(hobbit.moving = true) {
    //     requestAnimationFrame(hobbitRunning)
    // }
    render()
    requestAnimationFrame(playGame);
}

function render() {
    context.fillStyle = "antiqueWhite";
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.drawImage(treeBackground, 0, 0, 1000, 500);
    //drawing background 
    context.drawImage(hobbitRun1, hobbit.xCoord, hobbit.yCoord, hobbit.width, hobbit.height);
    requestAnimationFrame(hobbitRunning)
}

console.log(hobbitRunFrames);


document.body.appendChild(canvas);