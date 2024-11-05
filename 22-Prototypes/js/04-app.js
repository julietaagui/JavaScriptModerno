function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    
    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo de cliente ${this.tipoCliente()}`

}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;

}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

//Se clona antes de instanciar
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// instancia
const juli = new Persona('Julieta', 25000, 2604341029);


console.log(juli.nombreClienteSaldo())

Cliente.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es: ${this.telefono}`
}

console.log(juli.mostrarTelefono())
