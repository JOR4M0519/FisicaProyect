function drawGraph (cargas,punto) {
    console.log(cargas, punto);
    const canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let unit = 50; // Changes when zoom

    let offsetX = 0;
    let offsetY = 0;

    ctx.font = "14px Roboto";
    bgColor = "#222";
    fontColor = "#EBEBEB";
    axisColor = "#90DCB5";
    gridColor = "#6BBCAC";


    function drawScreen() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        const XAxis = {
            start: {
                x: 0,
                y: height / 2
            },
            end: {
                x: width,
                y: height / 2
            }
        };

        const YAxis = {
            start: {
                x: width / 2,
                y: 0
            },
            end: {
                x: width / 2,
                y: height
            }
        };

        const origin = {
            x: width / 2,
            y: height / 2
        };
        
        drawAxes(XAxis, YAxis, axisColor);
        drawGrid(origin, XAxis, YAxis, unit, gridColor, fontColor);

        function drawAxes(XAxis, YAxis, axisColor) {
            ctx.beginPath();
            ctx.moveTo(XAxis.start.x, XAxis.start.y - offsetY);
            ctx.lineTo(XAxis.end.x, XAxis.end.y - offsetY);
            ctx.moveTo(YAxis.start.x - offsetX, YAxis.start.y);
            ctx.lineTo(YAxis.end.x - offsetX, YAxis.end.y);
            ctx.strokeStyle = axisColor;
            ctx.lineWidth = 1;
            ctx.stroke();
        };
        
        drawPoint2(punto,ctx,origin);
        for(const carga of cargas){
            drawFunction(carga,punto, ctx, origin);
        }
        

        function drawPoint2(punto, ctx, origin) {
            const und = 50;
            
            ctx.fillStyle = "green";
        
            ctx.fillRect(origin.x+(punto.x*und) , (origin.y-(punto.y*und)), 5, 5);
            return {x: (origin.x+(punto.x*und)), y: (origin.y-(punto.y*und))}
        }

        function drawPoint(punto, ctx, origin) {
            const und = 50;
            
            ctx.fillStyle = "red";
        
            ctx.fillRect(origin.x+(punto.x*und) , (origin.y-(punto.y*und)), 5, 5);
            return {x: (origin.x+(punto.x*und)), y: (origin.y-(punto.y*und))}
        }
        
        function drawArrow(carga, punto, ctx,origin){
            const und = 50;
        
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#fffefe";

            let coordenadaCargaX = origin.x+(carga.x*und);
            let coordenadaCargaY = origin.y-(carga.y*und);
            
            ctx.moveTo(coordenadaCargaX,coordenadaCargaY);
            let halfdistance =  Math.sqrt(Math.pow((carga.x-punto.x),2)+Math.pow((carga.y-punto.y),2))/2;
            coordenadaCargaX = origin.x;
            coordenadaCargaY = origin.y;

            if((carga.campoC>0)){
                //distanciar en ejes
                if(carga.x>punto.x){
                    if(carga.y>punto.y){
                        ctx.lineTo(coordenadaCargaX+halfdistance*und,coordenadaCargaY+halfdistance*und);
                    }else{
                        ctx.lineTo(coordenadaCargaX+halfdistance*und,coordenadaCargaY-halfdistance*und);
                    }
                }else{
                    if(carga.y>punto.y){
                        ctx.lineTo(coordenadaCargaX-halfdistance*und,coordenadaCargaY+halfdistance*und);
                    }else{
                        ctx.lineTo(coordenadaCargaX-halfdistance*und,coordenadaCargaY-halfdistance*und);
                    }
                }
        
            }else{
                //distanciar en ejes
                if(carga.x>punto.x){
                    if(carga.y>punto.y){
                        ctx.lineTo(coordenadaCargaX-halfdistance*und,coordenadaCargaY-halfdistance*und);
                    }else{
                        ctx.lineTo(coordenadaCargaX-halfdistance*und,coordenadaCargaY+halfdistance*und);
                    }
                }else{
                    if(carga.y>punto.y){
                        ctx.lineTo(coordenadaCargaX+halfdistance*und,coordenadaCargaY-halfdistance*und);
                    }else{
                        ctx.lineTo(coordenadaCargaX+halfdistance*und,coordenadaCargaY+halfdistance*und);
                    }
                }
            }
        
            ctx.stroke();
        }
        
        function drawFunction(carga, punto, ctx, origin) {
            
            drawPoint(carga,ctx,origin);

            drawArrow(carga,punto,ctx,origin);
        
        }
        

        function drawGrid(origin, XAxis, YAxis, unit, gridColor, fontColor) {
            ctx.strokeStyle = gridColor;
            ctx.fillStyle = fontColor;
            // Draw vertical lines
            // -- right side
            for (let i = 0; i < 1000; i++) {
                const x = origin.x + unit * i - offsetX;

                ctx.beginPath();
                ctx.moveTo(x, YAxis.start.y);
                ctx.lineTo(x, YAxis.end.y);
                ctx.lineWidth = 0.25;
                ctx.stroke();

                if (i !== 0 && i % 5 === 0) {
                    ctx.fillText(i, x, origin.y - offsetY);
                }
            }
            // -- left side
            for (let i = 0; i < 1000; i++) {
                const x = origin.x - unit * i - offsetX;

                ctx.beginPath();
                ctx.moveTo(x, YAxis.start.y);
                ctx.lineTo(x, YAxis.end.y);
                ctx.lineWidth = 0.25;
                ctx.stroke();

                if (i !== 0 && i % 5 === 0) {
                    ctx.fillText(-i, x, origin.y - offsetY);
                }
            }
            // Draw horizontal lines
            // -- bottom
            for (let i = 0; i < 1000; i++) {
                const y = origin.y + unit * i - offsetY;

                ctx.beginPath();
                ctx.moveTo(XAxis.start.x, y);
                ctx.lineTo(XAxis.end.x, y);
                ctx.lineWidth = 0.25;
                ctx.stroke();

                if (i !== 0 && i % 5 === 0) {
                    ctx.fillText(-i, origin.x - offsetX, y);
                }
            }
            //-- top
            for (let i = 0; i < 1000; i++) {
                const y = origin.y - unit * i - offsetY;

                ctx.beginPath();
                ctx.moveTo(XAxis.start.x, y);
                ctx.lineTo(XAxis.end.x, y);
                ctx.lineWidth = 0.25;
                ctx.stroke();

                if (i !== 0 && i % 5 === 0) {
                    ctx.fillText(i, origin.x - offsetX, y);
                }
            }
        };

        

        //GetData

        // drawFunction(function (x) {return x-(2*x);
        // }, "#fffff");

        // drawFunction(function(x) {
        //     return -Math.sin(x);
        // });

        // drawFunction(function (x) {
        //     return Math.cos(x);
        // }, "#EA5356");

        // drawFunction(function (x) {
        //     return x;
        // }, "#ffffff");
    };

    // window.onresize = function (event) {
    //     width = canvas.width = window.innerWidth;
    //     height = canvas.height = window.innerHeight;
    //     drawScreen();
    // };

    // canvas.onwheel = function (event) {
    //     unit -= event.deltaY / 50;
    //     // if (unit < 8) {
    //     //     unit = 8;
    //     // }
    //     // if (unit > 130) {
    //     //     unit = 130;
    //     // }
    //     //console.log(unit);
    //     drawScreen();
    // };

    let drag = false;
    let mouseX = 0;
    let mouseY = 0;

    canvas.onmousedown = function (event) {
        drag = true;
        mouseX = event.clientX + offsetX;
        mouseY = event.clientY + offsetY;
    }

    canvas.onmousemove = function (event) {
        let currentMouseX = event.clientX;
        let currentMouseY = event.clientY;

        if (drag) {
            offsetX = mouseX - currentMouseX;
            offsetY = mouseY - currentMouseY;
            drawScreen();
        }
    }

    canvas.onmouseup = function (event) {
        drag = false;
    }
    drawScreen();
};

