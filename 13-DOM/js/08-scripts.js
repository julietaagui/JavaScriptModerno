const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Los espacios en blanco son considerados elementos

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading';

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children);


// Traversing de hijo al padre 
// console.log(card.parentElement.parentElement.parentElement);
 
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
