function sumar(a,b){
    return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);


let total = 0;

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return total * 1.15;
};

totalPagar = calcularImpuesto(total);

total = agregarCarrito(300);
total = agregarCarrito(100);

console.log(`El total a pagar es ${totalPagar}`);