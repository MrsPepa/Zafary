const home = document.querySelector('#home');
const wzp = document.querySelector('#whatsapp');
const zpotify = document.querySelector('#zpotify');
const titulo = document.querySelector('#tDinamico');
const dinamico = document.querySelector('#dinamico');

home.addEventListener('click', cargarHome);
wzp.addEventListener('click', cargarWzp);
zpotify.addEventListener('click', cargarZpotify);

function cargarHome(){
    dinamico.setAttribute('src', '../Home/index.html');
    titulo.innerHTML = 'Zafary';
}
function cargarWzp(){
    dinamico.setAttribute('src', './../Whatsapp/index.html');
    titulo.innerHTML = 'Whatzapp';
}
function cargarZpotify(){
    dinamico.setAttribute('src', './../Zpotify/index.html');
    titulo.innerHTML = 'Zpotify';
}