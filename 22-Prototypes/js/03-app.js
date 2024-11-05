// crear el objeto
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


//instanciarlo
const maria = new Cliente('Maria', 5000);
console.log(maria.tipoCliente());
console.log(maria.nombreClienteSaldo());
console.log(maria);
maria.retiraSaldo(1000);
console.log(maria.nombreClienteSaldo());

