    //me guarda en la variable lo del elemento area_dibujo
    const hojaDibujo = document.getElementById("area_dibujo");
    const botonBorrar = document.getElementById("reset");
    botonBorrar.addEventListener("click", limpiarCanvas);
    let diseño = hojaDibujo.getContext("2d");
    let grosor = document.getElementById("grosor")
    let colorDeLinea = document.getElementById("selecion_color")
    let colorLinea = colorDeLinea.value;
    
//borra todo el contenido    
function limpiarCanvas() {
   diseño.clearRect(0, 0, hojaDibujo.width, hojaDibujo.height, diseño);
}

//evento que inicia y finaliza cada trazo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorDeLinea.value;
    lienzo.lineWidth = grosor.value;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineCap = "round";
    lienzo.lineJoin = "round";
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function teclado() {
//valores de teclado
    const teclas = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowLeft: 37,
        ArrowDown: 40,
    };

    document.addEventListener("keydown", dibujarTeclado);
    //getContex perpmite obtener el area del dibujo
    let inicioX =  (document.getElementById("inicio_X"))
    let x = Number(inicioX.value);
    let inicioY =  (document.getElementById("inicio_Y"))
    let y = Number (inicioY.value);

    dibujarLinea(colorLinea.value, x, y, x+1 , y+1, diseño)
//las teclas que van a hacer el dibujo
    function dibujarTeclado(evento) {
        let movimiento = 10;
        switch (evento.keyCode) {
            case teclas.ArrowDown:
                dibujarLinea(colorLinea , x, y, x, y + movimiento, diseño);
                y += movimiento;
                console.log(x, y, x, y + movimiento,)
                break;
            case teclas.ArrowUp:
                dibujarLinea(colorLinea , x, y, x, y - movimiento, diseño);
                //guardo mi movimiento
                y -= movimiento;
                break;
            case teclas.ArrowLeft:
                dibujarLinea(colorLinea , x, y, x - movimiento, y, diseño);
                x -= movimiento;
                break;
            case teclas.ArrowRight:
                dibujarLinea(colorLinea , x, y, x + movimiento, y, diseño);
                x += movimiento;
                break;
            default:
                console.log("Otra tecla");
        }    
    }
}
/*
function mouse() {

    document.addEventListener("mousedown", inicioLinea);
    document.addEventListener("mouseup", finLinea);
    document.addEventListener("mousemove", dibujarMouse);

    let mouse = false;

    function inicioLinea() {
        mouse = true;
    }
 
    function finLinea() {
        mouse = false;
    }

    function dibujarMouse(evento) {
        console.log(evento);
        let xi = evento.offsetX;
        let yi = evento.offsetY;
        if (mouse != false) {
            dibujarLinea(colorDeLinea, xi +1, yi+1, xi-1, yi-1, diseño);
        }
    }
}

function touchDibujar(evento) {
    document.addEventListener("touchstar", inicioDibujo);
    document.addEventListener("touchmove", dibujatouch);
    
    let touch = false
    function inicioDibujo() {
        touch = true;
    }

    function dibujatouch(evento) {
        console.log(evento);
        let xi = evento.offsetX;
        let yi = evento.offsetY;
        if (touch != false) {
            dibujarLinea(colorDeLinea, xi +1, yi+1, xi-1, yi-1, diseño);
        }
    }

}
*/
function dibujarCoordenada() {
    let cordenadaX = document.getElementById("cordenadaX")
    let cordenadaY = document.getElementById("cordenadaY")
    let cordenadaXf = document.getElementById("cordenadaXf")
    let cordenadaYf = document.getElementById("cordenadaYf")
    dibujarLinea(colorDeLinea, cordenadaX.value, cordenadaY.value, cordenadaXf.value, cordenadaYf.value, diseño)
    console.log(cordenadaX.value, cordenadaY.value, cordenadaXf.value, cordenadaYf.value)

}

let miCanvas = document.querySelector('#area_dibujo');
let lineas = [];
let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;
// Marca el nuevo punto
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;

let posicion = miCanvas.getBoundingClientRect()
correccionX = posicion.x;
correccionY = posicion.y;

miCanvas.width = 500;
miCanvas.height = 500;

//======================================================================
// FUNCIONES
//======================================================================

/**
 * Funcion que empieza a dibujar la linea
 */
function empezarDibujo () {
    pintarLinea = true;
    lineas.push([]);
};

/**
 * Funcion que guarda la posicion de la nueva línea
 */
function guardarLinea() {
    lineas[lineas.length - 1].push({
        x: nuevaPosicionX,
        y: nuevaPosicionY
    });
}

/**
 * Funcion dibuja la linea
 */
function dibujarLinea (event) {
    event.preventDefault();
    if (pintarLinea) {
        let ctx = miCanvas.getContext('2d')
        // Estilos de linea
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.lineWidth = 10;
        // Color de la linea
        ctx.strokeStyle = 'black';
        // Marca el nuevo punto
        if (event.changedTouches == undefined) {
            // Versión ratón
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
        } else {
            // Versión touch, pantalla tactil
            nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
            nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
        }
        // Guarda la linea
        guardarLinea();
        // Redibuja todas las lineas guardadas
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }
}

/**
 * Funcion que deja de dibujar la linea
 */
function pararDibujar () {
    pintarLinea = false;
    guardarLinea();
}

//======================================================================
// EVENTOS
//======================================================================

// Eventos raton
miCanvas.addEventListener('mousedown', empezarDibujo, false);
miCanvas.addEventListener('mousemove', dibujarLinea, false);
miCanvas.addEventListener('mouseup', pararDibujar, false);

// Eventos pantallas táctiles
miCanvas.addEventListener('touchstart', empezarDibujo, false);
miCanvas.addEventListener('touchmove', dibujarLinea, false);

