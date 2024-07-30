const meses = [];

// definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Xiaomi',
    precio: 200
}

const producto3 = {
    nombre: 'Teclado',
    precio: 100
}

let resultado;

// Forma declarativa para agregar
resultado = [...carrito, producto];


console.table(resultado)
console.table(carrito);