// Switch case 

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log('Pagaste con ${metodoPago}');
        break;
    case 'cheque':
        console.log('Pagaste con ${metodoPago}');
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
        break;

}