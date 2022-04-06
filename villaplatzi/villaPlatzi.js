const vipla = document.getElementById("campoVillaPlatzi");
const hojaDePapel = vipla.getContext("2d");

const teclas = {
    ArrowUp:    38,
    ArrowRight: 39,
    ArrowLeft:  37,
    ArrowDown:  40,
};
let fondo = {
    url : "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/tile.png",
    cargaOk: false
};
let vaca = {
    url : "https://static.platzi.com/media/files/funciones-matematicas-y-numeros-aleatorios-en-java/vaca.png",
    cargaOk: false
};
let cerdo = {
    url : "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/cerdo.png",
    cargaOk: false
};
let pollo = {
    url : "https://static.platzi.com/media/files/uso-y-carga-de-imagenes-en-canvas/pollo.png",
    cargaOk: false
};
//villa
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
//vacas
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;   //directa
//cerdos
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;  
//pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;


fondo.imagen.addEventListener("load", () => {fondo.cargaOk = true; dibujar()});
vaca.imagen.addEventListener("load", () => {vaca.cargaOk = true; dibujar()});
cerdo.imagen.addEventListener("load", () => {cerdo.cargaOk = true; dibujar()});
pollo.imagen.addEventListener("load", () => {pollo.cargaOk = true; dibujar()});

let cantidad = aleatorio(5, 15);
let movimiento = 10;

dibujar = () => {
    if(cerdo.cargaOk) {    
        //valores iniciales
        let x = aleatorio(0, 420);
        let y = aleatorio(0, 420);
        //inicio fondo y cerdo
        hojaDePapel.drawImage(fondo.imagen, 0, 0);                  
        hojaDePapel.drawImage(cerdo.imagen, x, y);
        //las teclas que van a hacer el dibujo
        document.addEventListener("keydown", (evento) => {
            switch (evento.keyCode) {
                case teclas.ArrowDown: 
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                    y += movimiento;
                    //actualiza fondo y posicion cerdo
                    hojaDePapel.drawImage(fondo.imagen, 0, 0);
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                        for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(pollo.imagen, x, y);
                        }
                        for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(vaca.imagen, x, y);
                        }
                    break;
                case teclas.ArrowUp:
                    y -= movimiento;
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                    hojaDePapel.drawImage(fondo.imagen, 0, 0);
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                    for(v=0; v<cantidad; v++) {
                        let x = aleatorio(0, 7);
                        let y = aleatorio(0, 7);
                        x = x * 70;
                        y = y * 70;
                        hojaDePapel.drawImage(pollo.imagen, x, y);
                    }
                    for(v=0; v<cantidad; v++) {
                        let x = aleatorio(0, 7);
                        let y = aleatorio(0, 7);
                        x = x * 70;
                        y = y * 70;
                        hojaDePapel.drawImage(vaca.imagen, x, y);
                    }
                    break;
                case teclas.ArrowLeft:
                    x -= movimiento;
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                    hojaDePapel.drawImage(fondo.imagen, 0, 0);
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                     for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(pollo.imagen, x, y);
                        }
                        for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(vaca.imagen, x, y);
                        }
                    break;
                case teclas.ArrowRight:
                    x += movimiento;
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                    hojaDePapel.drawImage(fondo.imagen, 0, 0);
                    hojaDePapel.drawImage(cerdo.imagen, x, y);
                     for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(pollo.imagen, x, y);
                        }
                        for(v=0; v<cantidad; v++) {
                            let x = aleatorio(0, 7);
                            let y = aleatorio(0, 7);
                            x = x * 70;
                            y = y * 70;
                            hojaDePapel.drawImage(vaca.imagen, x, y);
                        }
                    break;
                default:
                    console.log("Otra tecla");
            }    
        });
    }
}



function aleatorio(maxi, min) {
let result;
result = Math.floor (Math.random() * (maxi - min +1)) + min;
return result;
}


