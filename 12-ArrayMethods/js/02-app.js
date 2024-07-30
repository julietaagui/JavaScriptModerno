const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
];

meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el indice ${i}`)
    }
})

// Encontrar el indice e abril

const indice = meses.findIndex( (mes) => mes === 'Abril');
console.log(indice);


// Enconrtar el indice de un regalo de objetos
const indice2 = carrito.findIndex( producto => producto.nombre === 'Monitor')
console.log(indice2)