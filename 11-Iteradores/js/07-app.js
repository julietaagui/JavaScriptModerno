// For of
// itera sobre areglos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]

for( let pendiente of pendientes){
    console.log(pendiente);
};

for( let producto of carrito){
    console.log(producto)
}