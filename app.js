// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde se almacenan los nombres
let amigos = [];

// Función de entrada
function agregarAmigo() {
    // Obtener el input
    let agregar = document.getElementById("amigo");
    let nombre = agregar.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserta un nombre.");
        return;
    }

    //Verificar si los nombres no estan duplicados
    for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].toLowerCase() === nombre.toLowerCase()) {
        alert('El nombre "' + nombre + '" ya está en la lista.');
        return; // Sale de la función sin agregar el nombre
    }
}


    // Agregar al arreglo
    amigos.push(nombre);

    // Mostrar amigos actualizados
    mostrarAmigos();

    // Limpiar campo de entrada
    agregar.value = "";
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    // Obtener el <ul> de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // Recorrer el array y crear <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let nuevoNom = document.createElement("li");
        nuevoNom.textContent = amigos[i];
        lista.appendChild(nuevoNom);
    }
}

function sortearAmigo() {
    if (amigos.length === 0 ){
        alert ("No existen amigos a los cuales sortear");
        return;
    }
}

let aleatorio = Math.floor(Math.random() * amigos.length);

let amigosecreto = amigos[aleatorio];

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<strong> El amigo secreto es:</strong> ${amigosecreto}`;

