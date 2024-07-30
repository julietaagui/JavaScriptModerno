// for in
// itera sobre objetos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for( let pendiente in pendientes){
    console.log(pendiente);
};

const auto = {
    modelo: 'Camaro',
    año: '1969'
}

for( let [llave, valor] of Object.entries(auto) ){
    console.log(valor);
    console.log(llave)
}