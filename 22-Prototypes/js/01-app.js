// Object literal
const cliente = {
    nombre: 'Juli',
    saldo: 500
}

console.log(cliente);

//Object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('juli', 500);
console.log(Cliente);

