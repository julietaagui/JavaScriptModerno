// for(let i = 0; i <= 10; i++){
//     if( i === 5){
//         console.log('Cinco');
//        continue;
//     }
//     console.log(`Numero: ${i}`);
// };

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]

for( let i = 0; i < carrito.length ; i++){
    if(carrito[i].descuento){
        console.log(`Tienes descuento en el producto: ${carrito[i].nombre}`);
        continue;
    }
    console.log(carrito[i])
}