// Variables
const formulario = document.querySelector('#formulario');
const listaTweers = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

// Eventos
function eventListeners(){
    //Cuando el ususario agrega un nuevo tweet
    formulario.addEventListener('submit', aregagarTweet);

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
    })

    console.log(tweets);

    crearHTML();
}


// Funciones
function aregagarTweet(e){
    e.preventDefault();
    
    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    //Validacion 
    if(tweet.trim() === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return; //evita que s eejecuten mas lineas d ecodigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez creado vamos a agregar el html
    crearHTML();

    // Reiniciar formulario
    formulario.reset();
}

//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Mustra un listado de los tweets
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            // crear el html
            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            // insertar en el html
            listaTweers.appendChild(li)
        });
    }

    sincronizarStorage();
}

// agrega los tweets actuales al localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Limpiar html
function limpiarHTML(){
    while(listaTweers.firstChild){
        listaTweers.removeChild(listaTweers.firstChild);
    }
}


