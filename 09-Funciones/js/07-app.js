iniciarApp();

function iniciarApp(){
    console.log('Iniciando app')

    segundaFuncion();
};

function segundaFuncion(){
    console.log('Hola desde segunda funcion')

    usuarioAutenticado('Juli');
};

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere... ');
    console.log('Usuario autenticado exitosamente, ${usuario}')
};
