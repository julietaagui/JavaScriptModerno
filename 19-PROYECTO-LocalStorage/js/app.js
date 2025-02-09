// Variables
const formulario = document.querySelector('#formulario');
const listaTweers = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

// Eventos
function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', aregagarTweet);

    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        // Cargar tweets desde localStorage
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML(); // Llama a crearHTML aquí para cargar los tweets
    });
}

// Funciones
function aregagarTweet(e) {
    e.preventDefault();
    
    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    // Validación 
    if (tweet.trim() === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return; // Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    };

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez creado, vamos a agregar el html
    crearHTML();

    // Reiniciar formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            //Crear boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar)

            // Insertar en el HTML
            listaTweers.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los tweets actuales al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
    while (listaTweers.firstChild) {
        listaTweers.removeChild(listaTweers.firstChild);
    }
}
