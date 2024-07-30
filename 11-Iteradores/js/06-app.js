// ForEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) =>{
    console.log(`${indice}: ${pendiente}`)
})

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]

// itera los arreglos
const nuevoArreglo = carrito.forEach( producto => producto.nombre);

//Crea un nuevo arreglo y lo itera
const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(nuevoArreglo2);