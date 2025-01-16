//declaracion de clase

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacio(){
        return `Cliente: ${this.nombre} tiene un saldo de: ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenida al cajero`
    }
};

const juli = new Cliente('juli', 400);
console.log(juli.mostrarInformacio());

console.log(Cliente.bienvenida())



//expresion de clase
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacio(){
        return `Cliente: ${this.nombre} tiene un saldo de: ${this.saldo}`
    }
};

const erica = new Cliente2('juli', 400);
console.log(erica.mostrarInformacio());