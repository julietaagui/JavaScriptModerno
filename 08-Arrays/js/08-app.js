const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring 
const { nombre } = producto;
console.log(nombre);

// Destructuring con arreglos
const numeros = [1,2,3,4,5]

// si quiero acceder al tercero
const [...tercero] = numeros;
console.log(primero);
