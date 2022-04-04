    //me guarda en la variable lo del elemento area_dibujo
    const hojaDibujo = document.getElementById("area_dibujo");
    let botonBorrar = document.getElementById("reset");  
    botonBorrar.addEventListener("click", limpiarCanvas);
    let diseño = hojaDibujo.getContext("2d");
    let grosor = document.getElementById("grosor")
    let colorDeLinea = document.getElementById("selecion_color")
    let colorLinea = colorDeLinea.value;
    
// FUNCIONES 
//--------------------------------------------------------
//evento que inicia y finaliza cada trazo (condiciones de trazo)
dibujarLinea = (color, xinicial, yinicial, xfinal, yfinal, lienzo) => {
    lienzo.beginPath();                         //Inicia trazo
    lienzo.strokeStyle = colorDeLinea.value;    //le da color al contorno fillStyle le da color al relleno
    lienzo.lineWidth = grosor.value;            //Grosor del trazo
    lienzo.moveTo(xinicial, yinicial);          //Cordenadas iniciales
    lienzo.lineCap = "round";                   //borde el final de trazo
    lienzo.lineJoin = "round";                  //bordea inicio de trazo
    lienzo.lineTo(xfinal, yfinal);              //ancho y alto
    lienzo.stroke();                            //dibuja figura vacia fillReact figura con relleno
    lienzo.closePath();                         //final trazo
}
//--------------------------------------------------------
//borra todo el contenido    
function limpiarCanvas() {
    diseño.clearRect(0, 0, hojaDibujo.width, hojaDibujo.height, diseño);
 }
//--------------------------------------------------------
//dibuja con flechas del teclado    
function teclado() {
    //valores de teclado
    const teclas = {
        ArrowUp:    38,
        ArrowRight: 39,
        ArrowLeft:  37,
        ArrowDown:  40,
    };

    document.addEventListener("keydown", dibujarTeclado ); //se llama cada vez que se presiona una flecha
    //valores iniciales
    let inicioX =  (document.getElementById("inicio_X"))
    let x = Number(inicioX.value);
    let inicioY =  (document.getElementById("inicio_Y"))
    let y = Number (inicioY.value);

    dibujarLinea(colorLinea.value, x, y, x+1 , y+1, diseño)   //hace un punto de partida visible al usuario
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
//--------------------------------------------------------
function mouse() {

    let mouse = false;
    hojaDibujo.addEventListener("mousedown", () => {mouse = true;});
    hojaDibujo.addEventListener("mouseup", () => {mouse = false;});

    hojaDibujo.addEventListener('mousemove', (evento) => {
        let xi = evento.offsetX;
        let yi = evento.offsetY;
        if (mouse != false) {
            dibujarLinea(colorDeLinea, xi +1, yi+1, xi-1, yi-1, diseño);
        }
    });
}
//--------------------------------------------------------
function dibujarCoordenada() {
    let cordenadaX = document.getElementById("cordenadaX")
    let cordenadaY = document.getElementById("cordenadaY")
    let cordenadaXf = document.getElementById("cordenadaXf")
    let cordenadaYf = document.getElementById("cordenadaYf")
    dibujarLinea(colorDeLinea, cordenadaX.value, cordenadaY.value, cordenadaXf.value, cordenadaYf.value, diseño)
}
