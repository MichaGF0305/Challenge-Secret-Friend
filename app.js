// Se genera un número secreto al azar entre 1 y 10
let numeroSecreto = 0;

// Se inicializa el número de intentos
let intentos = 0;

// Esta es una lista que contendrá los números sorteados
let listaNumerosSorteados = []; 

// Numero Maximo que se puede generar
let numeroMaximo = 10;

// Aqui definimos una función que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

// Esta es la función que se ejecuta al hacer clic en el botón de intentar
function verificarIntento() {

    let numeroUsuario = document.getElementById('valorUsuario').value;

    // Debugear número de intentos
    console.log('Número de intentos:', intentos);

    // El usuario acertó
    if (numeroUsuario == numeroSecreto){
        asignarTextoElemento('p', `¡Felicidades! Has acertado el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    
    document.getElementById('reiniciar').removeAttribute('disabled');

    // El usuario no acertó
    } else {

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');

    } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        // Se incrementa el número de intentos
        intentos++;

        // Se limpia la caja de texto para que el usuario pueda ingresar un nuevo número
        limpiarCaja();
    }

    // Debugs
    console.log('Número ingresado por el usuario:', numeroUsuario);
    //console.log('Número secreto generado:', numeroSecreto);
    console.log(numeroUsuario == numeroSecreto);
    //

    return;
}

// Esta función limpia la caja de texto para que el usuario pueda ingresar un nuevo número
function limpiarCaja() {
    
    // Se obtiene la caja de texto y se limpia su valor
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';

}

function condicionesIniciales() {
    
    // Asignar un mensaje inicial al elemento <p>
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}.`);

    // Asignar un mensaje al elemento <h1>
    asignarTextoElemento('h1', 'Bienvenido al juego del número secreto');

    // Generar un nuevo número secreto
    numeroSecreto = generarNumeroSecreto();

    // Inicializar el número de intentos
    intentos = 1;

}

// Esta funcion se ejecuta al hacer clic en el botón de reiniciar
function reiniciarJuego() {

    // limpiar caja de texto
    limpiarCaja();

    // Indicar mensaje de intervalo de numeros
    condicionesIniciales();

    // Desactivar el botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

// Título
asignarTextoElemento('h1', 'Bienvenido al juego del número secreto');

// Instrucciones
asignarTextoElemento('p', 'Indica un número entre 1 y 10.');

// Esta función genera un número secreto aleatorio entre 1 y 10
function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    
    // Debugs
    console.log('Número generado:', numeroGenerado);
    console.log('Números sorteados hasta ahora:', listaNumerosSorteados);
    //

    // Si la lista de números sorteados alcanza el número máximo, se muestra un mensaje
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se han sorteado todos los números posibles. Reiniciando la lista de números sorteados.');
    }

    // Verificar que el número generado no esté en la lista de números sorteados
    if (listaNumerosSorteados.includes(numeroGenerado)) {

        return generarNumeroSecreto();  // Llamada recursiva hasta que se genere un número no repetido

    } else { // Si el número no está en la lista, se agrega y se retorna
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}

condicionesIniciales();