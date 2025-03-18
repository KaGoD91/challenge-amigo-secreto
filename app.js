// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo de texto
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista de nombres en la página
    actualizarLista();
}

// Función para actualizar la lista de nombres en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array de amigos y agregar cada nombre a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Eliminar el nombre sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;

    // Ocultar la lista de nombres restantes
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = "none";

    // Actualizar la lista visual (aunque esté oculta)
    actualizarLista();
}

// Función para reiniciar el juego
function nuevoJuego() {
    amigos.length = 0; // Vaciar el array de nombres
    document.getElementById('listaAmigos').innerHTML = ""; // Limpiar la lista visual
    document.getElementById('listaAmigos').style.display = "block"; // Mostrar la lista nuevamente
    document.getElementById('resultado').textContent = ""; // Limpiar el resultado del sorteo
    alert("¡Nuevo juego iniciado! Puedes agregar nuevos nombres."); // Mensaje para el nuevo juego
}

// Agregar event listeners
document.getElementById('agregarBtn').addEventListener('click', agregarAmigo);
document.getElementById('sortearBtn').addEventListener('click', sortearAmigo);
document.getElementById('nuevoJuegoBtn').addEventListener('click', nuevoJuego);