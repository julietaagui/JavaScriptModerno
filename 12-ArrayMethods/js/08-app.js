// Spread Operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

// Sprade operator con arreglos
const meses2 = [...meses, 'Agosto']
console.log(meses2);

// Spreade con objetos

const producto = { nombre: 'Disco duro', precio: 300};
const carrito2 = [...carrito, producto]

console.log(carrito2)