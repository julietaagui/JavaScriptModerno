
const autenticado= true;

if(autenticado) {
    console.log('El usuario esta autenticado')
}


const puntaje = 500;
/* en el caso de estar en una funcion se va a retornar en el primero que se cumpla y solo
    va a traer un valor no los dos si se cumplen ambos
*/
function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Exelente puntuacion!')
    return;
    }   

    if(puntaje > 300){
        console.log('Buen puntaje... felicidades')
    return;
    }
}

revisarPuntaje();
