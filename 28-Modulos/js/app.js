import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'
import { Empresa  } from './empresa.js';

nuevaFuncion()

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente,ahorro));

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

//importar empresa

const empresa = new Empresa('Juli', 200, 'Aprendizaje en linea');
console.log(empresa);

