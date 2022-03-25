//picture hace referencia a mi hoja de dibujo
let picture = document.getElementById("dibujito");
//date hacen referencia a la cantidad de lineas
let date = document.getElementById("date_line");
let date1 = document.getElementById("date_line1");

let boton = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
//al hacer click me llaman a un evento 
boton.addEventListener("click", dibujoPorClick);
boton2.addEventListener("click", dibujoPorClick1);
//me permite dibujar las lineas de la figura
let lienzo = picture.getContext("2d");
//indica el ancho de mi hoja de dibujo
let ancho = picture.width;

let xi, yf;

//evento que se ejecuta al dar click en el primer boton
function dibujoPorClick() {
    let lineas = parseInt(date.value);
    let espacio = ancho / lineas;

    //secuencia externa
    for ( i = 0; i < lineas; i ++) { 
        xi = yi = espacio * i;
        xf = yf = espacio * (i + 1);
        //superior derecho
        dibujarLinea("yellow", xi, 0, 300, yf);
        //inferior izquierdo
        dibujarLinea("yellow", 0, yi, xf, 300);
    }

    for (let i = 0; i < lineas; i++) { 
        xi = xf = (i*espacio);
        yi = yf = ancho - (i*espacio);
        //superior izquierdo
        dibujarLinea("green", xi, 300, 300, yf);
        //inferior derecho
        dibujarLinea("green", 0, yi, xf, 0);
    }
    //centros y contorno 
    for (let l = 0; l < lineas; l++) { 

        xi = yi = ancho - (l * espacio);
        xf = yf = espacio * l;
        //costado derecho
        dibujarLinea("gray", 150, 150, 300, yf);
        //costado superior
        dibujarLinea("gray", 150, 150, xf, 0);
        //costado inferior
        dibujarLinea("gray", xi, 300, 150, 150);
        //costado izquierdo
        dibujarLinea("gray", 0, yi, 150, 150);
        //lineas centrales y controno
        dibujarLinea("green", 0, 150, 300, 150);
        dibujarLinea("green", 150, 0, 150, 300);
        dibujarLinea("red", 0, 1, 300, 1);
        dibujarLinea("red", 0, 1, 1, 300);
        dibujarLinea("red", 300, 1, 300, 300);
        dibujarLinea("red", 300, 300, 0, 300);
    }
}

//evento que se ejecuta al dar click al segundo boton
function dibujoPorClick1 () {
    let recta = parseInt (date1.value);
    let espacio1 = (ancho / 2) /recta;
    //figura interna
    for (let l2 = 0; l2 < recta; l2++) { 
        xi = xf = (ancho / 2) + (espacio1 * l2);
        yi = espacio1 * l2;
        yf = ancho - (l2 * espacio1);
        //inferior derecho 
        dibujarLinea("purple", xi, 150, 150, yf);   
        //superior derecho
        dibujarLinea("red", 150, yi, xf, 150);
    }

    for (let i = 0; i < recta; i++) { 
        xi = yi = (espacio1 * i );
        xf = (ancho / 2) - (i * espacio1);
        yf = (ancho / 2) + (i * espacio1);
        //inferior izquierdo
        dibujarLinea("red", xi, 150, 150, yf);
        //superior izquierdo
        dibujarLinea("purple", 150, yi, xf, 150);
    }
}

//evento que inicia y finaliza cada trazo
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo .beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
