
const cliente = new Map();

cliente.set('nombre', 'karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', '3000');


console.log(cliente.size);

console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

cliente.clear()

console.log(cliente);


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('Dr', 'Dr Asignado');
paciente.set('nombre', 'Juan')

console.log(paciente)

paciente.forEach( datos => {
    console.log(datos)
} )

