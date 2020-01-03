const email = window.document.querySelector('#correo');
const password = window.document.querySelector('#pass');
const boton = window.document.querySelector('#btn');

boton.addEventListener('click', validar);

function validar(){
	
	const emailValue = email.value;
	const passValue = password.value;

	 if (emailValue == "ejemplo@gmail.com" && passValue == '123456') {
        console.log('Iniciando sesión…');
        email.value = '';
        password.value = '';
        email.focus();
        password.focus();

    } else {
        console.log('Email y/o Contraseña incorrectos');
    }
}
