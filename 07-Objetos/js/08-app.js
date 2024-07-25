"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

//impide que se agreguen nuevas propiedas
// Object.freeze( producto);

// permite modifoicar las llaves existentes pero no agregar
Object.seal( producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

 