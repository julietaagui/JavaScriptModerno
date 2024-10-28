
// Modificar textos o imajenes

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// para acceder al texto
// console.log(encabezado.innerTexto); // si en el css - visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent);// si lo va a encontrar 
// console.log(encabezado.innerHTML); // trae el html

document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
