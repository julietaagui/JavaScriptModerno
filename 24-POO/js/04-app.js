class Cliente {

    //privado
    #nombre;

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
};

const juli = new Cliente();
juli.setNombre('Juli');

console.log(juli.getNombre());