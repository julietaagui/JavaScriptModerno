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

// Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo)
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ // reescribir un metodo
        return `Bienvenida al cajero de empresas`
    }
};



console.log(Cliente.bienvenida());
const empresa = new Empresa('Julieta', 500, 'Aprendizaje en js', 'premium');
console.log(empresa);
console.log(empresa.mostrarInformacio());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());