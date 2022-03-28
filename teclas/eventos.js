//valores de teclado
const teclas = {
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowLeft: 37,
    ArrowDown: 40,
};

document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mousedown", estadoMouse);


//me guarda en la variable lo del elemento area_dibujo
const hojaDibujo = document.getElementById("area_dibujo");
//getContex perpmite obtener el area del dibujo
let diseño = hojaDibujo.getContext("2d");
//punto de inicio 
let x = 150;
let y = 150;
let click = 0;

dibujarLinea("red", 149, 149, 151, 151, diseño);

//evento que inicia y finaliza cada trazo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
//las teclas que van a hacer el dibujo
function dibujarTeclado(evento) {
    let colorLinea = "blue";
    let movimiento = 10;
    switch (evento.keyCode) {
        case teclas.ArrowDown:
            dibujarLinea(colorLinea, x, y, x, y + movimiento, diseño);
            y = y + movimiento;
            break;
        case teclas.ArrowUp:
            dibujarLinea(colorLinea, x, y, x, y - movimiento, diseño);
            //guardo mi movimiento
            y = y - movimiento;
            break;
        case teclas.ArrowLeft:
            dibujarLinea(colorLinea, x, y, x - movimiento, y, diseño);
            x = x - movimiento;
            break;
        case teclas.ArrowRight:
            dibujarLinea(colorLinea, x, y, x + movimiento, y, diseño);
            x = x + movimiento;
            break;
        default:
            console.log("Otra tecla");
    }    
}

function estadoMouse(evento) {
    if (evento = 1 ) {
        click = 1;
    console.log(evento);
    console.log(click);
    }else {
        click = 0;
    }
}

function dibujarMouse(evento) {
    let xi = evento.clientX;
    let yi = evento.clientY;
    console.log(evento);
    if (click = 1 && evento.clientX <= 300 && evento.clientY <= 300 ) {
        dibujarLinea("red", x, y, xi, yi, diseño);
        x = xi;
        y = yi;
        click -= 1;
        console.log(click);
        console.log( x, y, xi, yi);
    }
}

