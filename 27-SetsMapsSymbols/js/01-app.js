const carrito = new Set();

carrito.add('camisa');
carrito.add('disco')
carrito.add('camisa');

carrito.delete('disco')

// comprobar si existe
console.log(carrito.has('camisa'))

//vaciar todos los elementos
//carrito.clear()

carrito.forEach( (producto, index) => {
    //console.log(producto);
    console.log(index)
})

console.log(carrito);


// del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,10,20];
console.log(numeros);

const noDuplicados = new Set(numeros);
console.log(noDuplicados);
