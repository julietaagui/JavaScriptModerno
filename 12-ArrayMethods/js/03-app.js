// .reduce

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

let total = 0;

carrito.forEach( producto => total += producto.precio);

console.log(total);

// Con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado)
