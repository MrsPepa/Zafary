const email = window.document.querySelector('#correo');
const password = window.document.querySelector('#pass');
const mensaje = window.document.querySelector('#msj');
const boton = window.document.querySelector('#btn');

var pass = document.getElementById("password").value;

boton.addEventListener('click', mostrarDatos);

function mostrarDatos(){
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
	return regex.test(correo) ? true : false;
}
function validarPassword(){

}