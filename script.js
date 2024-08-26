const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;

const fantasyBackground = new Image();
fantasyBackground.ready = false;
fantasyBackground.onload = checkIfReady;
fantasyBackground.src = "./testImages/fantasyTestBg.jpg";

const hobbitRun = new Image(); 

function checkIfReady() {
    this.ready = true
    playGame();
}

function playGame() {
    render();
    requestAnimationFrame(playGame);
}

function render() {
    context.fillStyle = "antiqueWhite";
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.drawImage(fantasyBackground, 0, 0, 700, 500)
}


document.body.appendChild(canvas);