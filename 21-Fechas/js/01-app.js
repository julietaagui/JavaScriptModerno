const diaHoy = new Date();
let valor;

valor = diaHoy;

//Trae el año
valor = diaHoy.getFullYear();
//Trae el mes(inicia el mes en cero, ejemplo enero = 0)
valor = diaHoy.getMonth();
//Trae el minutos
valor = diaHoy.getMinutes();
//Trae el hora
valor = diaHoy.getHours();

valor = diaHoy.getTime();

// GET sirve para traer los valores del arreglo, mientras que SET sirve para modificarlos

valor = diaHoy.setFullYear('2004');

console.log(valor)