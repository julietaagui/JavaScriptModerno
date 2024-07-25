const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: "1Kg",
    medidas: "1m"
};


console.log(producto);
console.log(medidas);

// assign se utiliza para copiar el contenido
const resultado = Object.assign(producto, medidas);

// La sintaxis de punts tambien se utiliza para copiar el contenido
const resultado2 = { ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);