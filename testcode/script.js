const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const hobbitRun1Right = new Image();
hobbitRun1Right.ready = false;
hobbitRun1Right.onload = checkIfReady;
hobbitRun1Right.src = "./hobbitSprite/hobbitRun1Right.png";

const hobbitRun2Right = new Image();
hobbitRun2Right.ready = false;
hobbitRun2Right.onload = checkIfReady;
hobbitRun2Right.src = "./hobbitSprite/hobbitRun2Right.png";

const hobbitRun3Right = new Image();
hobbitRun3Right.ready = false;
hobbitRun3Right.onload = checkIfReady;
hobbitRun3Right.src = "./hobbitSprite/hobbitRun3Right.png";

const hobbitRun4Right = new Image();
hobbitRun4Right.ready = false;
hobbitRun4Right.onload = checkIfReady;
hobbitRun4Right.src = "./hobbitSprite/hobbitRun4Right.png";

const hobbitRun5Right = new Image();
hobbitRun5Right.ready = false;
hobbitRun5Right.onload = checkIfReady;
hobbitRun5Right.src = "./hobbitSprite/hobbitRun5Right.png";

const hobbit = {
  xCoord: 100,
  yCoord: 100,
  height: 300,
  width: 300,
  speed: 0.09,
  run: hobbitRun1Right,
  loaded: true,
};

const movementArrRight = [
  hobbitRun1Right,
  hobbitRun2Right,
  hobbitRun3Right,
  hobbitRun4Right,
  hobbitRun5Right,
  hobbitRun1Right,
];
function hobbitMovement() {
  for (let i = 0; i < movementArrRight.length; i++) {
    hobbit.run = movementArrRight[i];
    const moveFrame = () => {
      hobbit.run = movementArrRight[i];
    };
    setTimeout(moveFrame, i * 200);
    console.log([i], `this is frame ${[i]}`);
  }
}

function checkIfReady() {
  this.ready = true;
  playGame();
  setInterval(hobbitMovement, 1200);
}

function playGame() {
  requestAnimationFrame(playGame);
  render();
}

function render() {
  context.fillStyle = "antiqueWhite";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.drawImage(
    hobbit.run,
    hobbit.xCoord,
    hobbit.yCoord,
    hobbit.width,
    hobbit.height
  );
}

document.body.appendChild(canvas);
