// WeakSet
// solo almacena objetos
const weakSet = new WeakSet()


const cliente = {
    nombre : 'Juli',
    saldo: 200
}

weakSet.add(cliente);

console.log(weakSet);


// weakSet.delete(cliente);
