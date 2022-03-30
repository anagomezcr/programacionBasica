    //me guarda en la variable lo del elemento area_dibujo
    const hojaDibujo = document.getElementById("area_dibujo");
    const botonBorrar = document.getElementById("reset");
    botonBorrar.addEventListener("click", limpiarCanvas);
    let diseño = hojaDibujo.getContext("2d");
    console.log(hojaDibujo.width , hojaDibujo.height)
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
        let xi = evento.clientX;
        let yi = evento.clientY;
        if (mouse != false) {
            dibujarLinea(colorDeLinea, xi +1, yi+1, xi-1, yi-1, diseño);
        }
    }
}

function dibujarCoordenada() {
    let cordenadaX = document.getElementById("cordenadaX")
    let cordenadaY = document.getElementById("cordenadaY")
    let cordenadaXf = document.getElementById("cordenadaXf")
    let cordenadaYf = document.getElementById("cordenadaYf")
    dibujarLinea(colorDeLinea, cordenadaX.value, cordenadaY.value, cordenadaXf.value, cordenadaYf.value, diseño)
    console.log(cordenadaX.value, cordenadaY.value, cordenadaXf.value, cordenadaYf.value)

}
