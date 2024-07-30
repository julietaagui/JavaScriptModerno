const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true

if( dinero > totalAPagar ){
    console.log('Si puedes pagar');
}else if(cheque){
    console.log('Si puedes pagar con cheque');
}else if(tarjeta){
    console.log('Si puedes pagar con la tarjeta');
}else{
    console.log('No puedes pagar');
};