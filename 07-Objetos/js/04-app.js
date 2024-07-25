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

console.log(producto);

console.log(producto.informacion.fabricacion.pais);
