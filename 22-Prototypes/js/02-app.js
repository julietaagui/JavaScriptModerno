function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juli = new Cliente('juli', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

console.log(formatearCliente(juli));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const motorola = new Empresa('Motorola', 10000, 'Venta de Celulares')

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y una categoria: ${categoria}`
}
console.log(formatearEmpresa(motorola))