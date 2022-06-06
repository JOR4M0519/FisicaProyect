//Guardar el elemento y el contexto

const mainCanvas = document.getElementById("maincanvas");
const context = mainCanvas.getContext("2d");



let initialX;
let initialY;
let i = 0;
const puntos = [];

const paintPoint = (cursorX, cursorY) => {


    // var svgElement = document.getElementById('cinema');
    // let { width, height } = svgElement.getBBox();

    // let clonedSvgElement = svgElement.cloneNode(true);

    // let outerHTML = clonedSvgElement.outerHTML,
    //     blob = new Blob([outerHTML], { type: 'image/svg+xml;charset=utf-8' });

    // let URL = window.URL || window.webkitURL || window;
    // let blobURL = URL.createObjectURL(blob);


    // let image = new Image();
    // image.src = blobURL;

    // console.log("1: " + image);
    // image.onload = () => {
    //     console.log(image);
    //     //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     context.drawImage(image, 0, 0, width, height);
    // };



    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 10;
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
    // paintObject(initialX, initialY);
};

const mouseDown = (evt) => {

    initialX = evt.offsetX;
    initialY = evt.offsetY;
    paintPoint(initialX, initialY);
};

function paintObject(X, Y) {
    context.fillStyle = "#108EFF";
    context.arc(X / 2, Y / 2, X / 4, 0, 2 * Math.PI);
    context.fill();
}


const generateCartesianPlain = () => {

    const svg = document.getElementById("plain");

    let scalex = d3.scaleLinear().domain([-100, 100]).range([0, 800]);
    let scaley = d3.scaleLinear().domain([-80, 80]).range([0, 650]);

    let axisY = d3.axisRight(scaley).ticks(20).tickPadding(5).tickSize(5);
    let axisX = d3.axisBottom(scalex).ticks(20).tickPadding(5).tickSize(5);


    d3.select('#axisY').call(axisY);
    d3.select('#axisX').call(axisX);


    // Add 3 dots for 0, 50 and 100%
    // svg.append("circle")
    //     .attr("cx", x(10)).attr("cy", 100).attr("r", 40).style("fill", "blue");
    // svg.append("circle")
    //     .attr("cx", x(50)).attr("cy", 100).attr("r", 40).style("fill", "red");
    // svg.append("circle")
    //     .attr("cx", x(100)).attr("cy", 100).attr("r", 40).style("fill", "green");
}

window.addEventListener('DOMContentLoaded', generateCartesianPlain);

mainCanvas.addEventListener("mousedown", mouseDown);
