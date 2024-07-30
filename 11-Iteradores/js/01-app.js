
// for( let i = 0; i < 10 ; i++){
//     console.log(`Numero: ${i}`)
// }

for( let i = 0 ; i <= 20 ; i++){
    if( i % 2 === 0 ){
        console.log(`El Numero: ${i} es PAR`)
    }else{
        console.log(`El numero: ${i} NO es PAR`)
    }
}

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 50},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 400}
]
console.log( carrito.length);

for(let i = 0; i <= carrito.length; i++){
    console.log(carrito[i])
}