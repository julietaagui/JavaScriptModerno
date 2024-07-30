// .some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

// meses.forEach( mes => {
//     if( mes === 'Enero'){
//         console.log('Si existe');
//     }
// })

// const resultado = meses.includes('Enero');
// console.log(resultado)

// En un arreglo de objetos se utiliza .some

// const existe = carrito.some( producto => {
//     return producto.nombre === 'Celular'
// });

const existe = carrito.some( producto => producto.nombre === 'Celular');

console.log(existe);

// En un arreglo tradicional con .some

const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);