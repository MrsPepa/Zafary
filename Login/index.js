const email = window.document.querySelector('#correo');
const password = window.document.querySelector('#pass');
const errorMsj = window.document.querySelector('.msjError');
const boton = window.document.querySelector('#btn');

boton.addEventListener('click', validar);
email.addEventListener('focus', focusInput);
password.addEventListener('focus', focusInput);

function validar(){

	 if (email.value == "ejemplo@gmail.com" && password.value == '123456') {
        console.log('Iniciando sesión…');
        email.value = '';
        password.value = '';
        document.location.assign('./../Layout/index.html');

    } else {
        errorMsj.classList.remove(['hide']);
        email.value = '';
        password.value = '';
        console.log('Email y/o Contraseña incorrectos');
    }
}

function focusInput(){
    errorMsj.classList.add(['hide']);
}