localStorage.removeItem('nombre');


//Actualizar registro
const mesesArray = JSON.parse( localStorage.getItem( 'meses' ) );
mesesArray.push('Nuevo mes');
localStorage.getItem('meses', JSON.stringify(mesesArray));
console.log(mesesArray);

localStorage.clear();