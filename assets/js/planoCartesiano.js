//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;
let i = 0;
const puntos = [];

const paintPoint = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 50;
    context.strokeStyle = "#000";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();
    i++;

    initialX = cursorX;
    initialY = cursorY;

    const punto = {
        x: initialX,
        y: initialY,
        i: i
    }
    puntos.push(punto);
    console.log(puntos);
};

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    paintPoint(initialX, initialY);
};

mainCanvas.addEventListener("mousedown", mouseDown);
