document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }
    
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"')
    const btnReset = document.querySelector('#formulario button[type="reset"')
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputCc.addEventListener('input', validar); 
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        resetFormulario();
    })

    function enviarEmail(e){
        e.preventDefault();
        
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
            'font-bold', 'text-sm', 'uperrcase');
            alertaExito.textContent = 'Mensaje enviado correctamente'

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    // el trim() se usa para eliminar los espacios en blanco
    function validar(e){
        if(e.target.value.trim() === ''){
            if (e.target.id !== 'cc') {  // No mostrar alerta si el campo es "cc"
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            }
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        //Validar email
        if ((e.target.id === 'email' || e.target.id === 'cc') && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';   // Usar email[e.target.name] en lugar de cc[e.target.name]
            comprobarEmail();
            return;
        }
    
        //Limpiar alerta 
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        // Comprobar el objeto email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);

        //Generar alerta
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email, cc) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
        
    }

    function comprobarEmail(){
        if(Object.values(email).includes('') ){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

    function resetFormulario(){
        // Reiniciar el objeto
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});