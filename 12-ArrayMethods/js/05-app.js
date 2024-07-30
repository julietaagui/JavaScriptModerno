const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

// Con forEach

let resultado = '';

carrito.forEach( (producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index]
    }
});
console.log(resultado)


// Con .find
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet')