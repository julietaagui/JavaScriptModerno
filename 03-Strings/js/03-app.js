const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

//Metodo disponible para los strings
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log( producto + 'Con un precio de: ' + precio );
console.log('El producto ' + producto + ' tiene un precio de: ' + precio); 
console.log('El producto ', producto, ' tiene un precio de: ', precio);

//Concatenacion con backticks
console.log(`El producto ${producto} tiene un precio de: ${precio}`);