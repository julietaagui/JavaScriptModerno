const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

producto.mostrarInfo();
