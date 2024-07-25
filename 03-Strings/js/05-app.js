const producto = 'Monitor 20 pulgadas';

// .replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar segun los indices
console.log(producto.slice(0,10));
console.log(producto.slice(8));
// No lo va a cortar porque el primer numero tiene que ser menor al segundo
console.log(producto.slice(2,1))


// Alternativa a slice
console.log(producto.substring(0,10))