const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]

// .map crea un arreglo nuevo
// carrito.map( function(producto){
//     console.log( `${producto.nombre} - Precio ${producto.precio}`);
// })

const nuevoArray = carrito.map( function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;
})

carrito.forEach( function(producto){
    console.log( `${producto.nombre} - Precio ${producto.precio}`);
})

console.log(nuevoArray);