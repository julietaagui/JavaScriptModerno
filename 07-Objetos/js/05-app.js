const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kl',
        medida: '1m'
    },
    fabricacion: {
        pais: 'China'
    }
};

const { nombre, informacion, informacion: { fabricacion: {pais}} } = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);