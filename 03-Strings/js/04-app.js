const producto = '      Monitor 20 pulgadas';

console.log(producto);
console.log(producto.length);

//Eliminar los espacios en blanco al inicio
console.log(producto.trimStart());
//Elimina los espacios en blanco del final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
//Elimina los espacios en blanco en todas las
console.log( producto.trim())