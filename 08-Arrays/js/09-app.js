const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]


for( let i = 0 ; i < carrito.length; i++){
    console.log( `${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log( `${producto.nombre} - Precio ${producto.precio}`);
})