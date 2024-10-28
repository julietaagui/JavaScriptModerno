const enlace = document.createElement('A');

//Agregando el texto
enlace.textContent = 'Nuevo enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

// enlace.onclick = miFuntion();

// seleccionar al navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);

// function miFuntion() {
//     alert('diste click')
// }


// Crear una CARD

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Comcierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.querySelector('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

//Crear card
const card = document.createElement('DIV');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0])