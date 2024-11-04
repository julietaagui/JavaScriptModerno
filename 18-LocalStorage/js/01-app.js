localStorage.setItem('nombre', 1);
const producto = {
    nombre: 'Monitor',
    precio: 300
}

//para convertir a string JSON.stringify
const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo',];
localStorage.setItem('meses', JSON.stringify(meses))