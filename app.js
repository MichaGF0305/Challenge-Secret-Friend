// Array donde se guardarán los amigos
let listaAmigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, introduce un nombre.");
    } else {
        listaAmigos.push(nombre);
        input.value = ""; // Limpiar la caja
        mostrarLista();   // Mostrar la lista actualizada
    }
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista antes de volver a dibujarla

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        ul.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li> Tu amigo secreto es: " + amigoSorteado + "</li>";
}
