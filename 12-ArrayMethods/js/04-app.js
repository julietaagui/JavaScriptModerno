const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 )
resultado = carrito.filter( producto => producto.precio < 600)

// Trae todos menos los audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')

// Trae solo los audifonos
resultado = carrito.filter( producto => producto.nombre === 'Audifonos')


console.log(resultado)