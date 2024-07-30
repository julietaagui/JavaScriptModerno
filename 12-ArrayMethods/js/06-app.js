// .every

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

// un .every revisa si se cumplen todas las condiciones
const resultado = carrito.every( producto => producto.precio < 1000)
console.log(resultado);

// Revisa que al menos uno cumpla la condicion
const resultado2 = carrito.some( producto => producto.precio < 500 );
console.log(resultado2)