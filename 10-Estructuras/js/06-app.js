
const usuario = false;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si eres usuario y puedes pagar')
}else if(!puedePagar && !usuario){
    console.log('No no puedes comprar')
} else if(!usuario){
    console.log('Inicia sesion o crea una cuenta')
}else if(!puedePagar){
    console.log('Fondos insuficientes')
}