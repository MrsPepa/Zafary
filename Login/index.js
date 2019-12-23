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

/*function mostrarDatos(){
	const emailValue = email.value;
	const passValue = password.value;
	if(emailValue !== ''){
		console.log('email: '+ emailValue);
		console.log('password: '+ passValue);
		email.value = '';
		password.value ='';
		email.focus();
	} else{
		console.log('No has escrito nada');
	}
}

function validarCorreo(){
	var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return regex.test(email) ? true : false;
}
*/