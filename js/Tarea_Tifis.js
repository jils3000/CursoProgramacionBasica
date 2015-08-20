//Declarar variables
var tablero;

var fondo = {
    imagenURL: "images/fondo.png",
    imagenOK: false
};

var boom = {
    imagenURL: "images/boom.png",
    imagenOK: false,
    x: 400,
    y: 200,
};

var tifis = {
    frenteOK: false,
    atrasOK: false,
    derOK: false,
    izqOK: false,
    velocidad: 20,
    x: 0,
    y: 0
};

var liz = {
    imagenOK: false,
    x: 400,
    y: 200
};

var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


// Funciones
function inicio() {
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    // imagen de fondo
    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    // imagen Boom
    boom.imagen = new Image();
    boom.imagen.src = boom.imagenURL;
    boom.imagen.onload = confirmarBoom;

    // Diana de frente
    tifis.frente = new Image();
    tifis.frente.src = "images/diana-frente.png";
    tifis.frente.onload = confirmarFrente;

    // Diana de espaldas
    tifis.atras = new Image();
    tifis.atras.src = "images/diana-atras.png";
    tifis.atras.onload = confirmarAtras;

    // Diana derecha
    tifis.der = new Image();
    tifis.der.src = "images/diana-der.png";
    tifis.der.onload = confirmarDer;

    // Diana izquierda
    tifis.izq = new Image();
    tifis.izq.src = "images/diana-izq.png";
    tifis.izq.onload = confirmarIzq;

    //Liz, el enemigo de Diana
    liz.imagen = new Image();
    liz.imagen.src = "images/liz.png";
    liz.imagen.onload = confirmarLiz;

    //Para coger la entrada de teclas
    document.addEventListener("keydown", teclado)

}

function confirmarFondo () {
    fondo.imagenOK = true;
    dibujar();
}

function confirmarBoom () {
    boom.imagenOK = true;
    dibujar();
}

function confirmarFrente () {
    tifis.frenteOK = true;
    dibujar();
}

function confirmarAtras () {
    tifis.atrasOK = true;
    dibujar();
}

function confirmarDer () {
    tifis.derOK = true;
    dibujar();
}

function confirmarIzq () {
    tifis.izqOK = true;
    dibujar();
}

function confirmarLiz () {
    liz.imagenOK = true;
    dibujar();
}

// En función de que tecla de flecha se pulsa para mover a Diana se cambia la imagen de Diana.
// Se impide que Diana se mueva por las zonas de madera o se salga del tablero.
function teclado(evento) {

    var codigo = evento.keyCode;
    
    if(codigo == teclas.UP)
    {
        tifis.y -= tifis.velocidad;

        // Tarea: Se impide que Diana se salga del tablero.
        if(tifis.y < 0)
        {
            tifis.y += tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera izquierda.
        if(tifis.y > 150 && tifis.y < 250 && tifis.x < 130)
        {
            tifis.y += tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera superior.
        if(tifis.x > 170 && tifis.x < 230 && tifis.y < 250)
        {
            tifis.y += tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera inferior.
        if(tifis.x > 100 && tifis.y > 300 && tifis.y < 400)
        {
            tifis.y += tifis.velocidad;
        }

    }
    
    if(codigo == teclas.DOWN)
    {
        tifis.y += tifis.velocidad;

        // Tarea: Se impide que Diana se salga del tablero.
        if(tifis.y > 450)
        {
            tifis.y -= tifis.velocidad;
        }
        
        // Tarea: Se impide que Diana se mueva por la zona de madera izquierda.
        if(tifis.y > 150 && tifis.y < 250 && tifis.x < 130)
        {
            tifis.y -= tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera superior.
        if(tifis.x > 170 && tifis.x < 230 && tifis.y < 250)
        {
            tifis.y -= tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera inferior.
        if(tifis.x > 100 && tifis.y > 300 && tifis.y < 400)
        {
            tifis.y -= tifis.velocidad;
        }
    }
    
    if(codigo == teclas.LEFT)
    {
        tifis.x -= tifis.velocidad;

        // Tarea: Se impide que Diana se salga del tablero.
        if(tifis.x < 0)
        {
            tifis.x += tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera izquierda.
        if(tifis.y > 150 && tifis.y < 250 && tifis.x < 130)
        {
            tifis.x += tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera superior.
        if(tifis.x > 170 && tifis.x < 230 && tifis.y < 250)
        {
            tifis.x += tifis.velocidad;
        }

    }
    
    if(codigo == teclas.RIGHT)
    {
        tifis.x += tifis.velocidad;

        // Tarea: Se impide que Diana se salga del tablero.
        if(tifis.x > 450)
        {
            tifis.x -= tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera superior.
        if(tifis.x > 170 && tifis.x < 230 && tifis.y < 250)
        {
            tifis.x -= tifis.velocidad;
        }

        // Tarea: Se impide que Diana se mueva por la zona de madera inferior.
        if(tifis.x > 100 && tifis.y > 300 && tifis.y < 400)
        {
            tifis.x -= tifis.velocidad;
        }

    }
    
    dibujar(codigo);
}

function dibujar(direccion) {

    if (fondo.imagenOK) {
        tablero.drawImage(fondo.imagen, 0, 0);
    }

    var tifisOrientada = tifis.frente;

    // Se comprueba que las imágenes estan cargadas
    if (tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK) {

        // Se carga una imagen de Diana en función de la tecla pulsada por el jugador.
        if (direccion == teclas.DOWN || direccion == undefined ) {
            tifisOrientada = tifis.frente;
        }

        if (direccion == teclas.UP) {
            tifisOrientada = tifis.atras;
        }

        if (direccion == teclas.LEFT) {
            tifisOrientada = tifis.izq;
        }

        if (direccion == teclas.RIGHT) {
            tifisOrientada = tifis.der;
        }

        tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

    }

    // Batalla Mortal entre Diana y Liz cuando se encuentran
    if(tifis.x == 400 && tifis.y == 200 )
    {
        boom.imagenOK = true;
        liz.imagenOK = false;
        
        // Dibuja la explosión producida durante la batalla
        if (boom.imagenOK) {
        tablero.drawImage(boom.imagen, boom.x, boom.y);
        }

    }
    else
        // Dibuja imagen del enemigo Liz
        if (liz.imagenOK) {
            tablero.drawImage(liz.imagen, liz.x, liz.y);
        }

}