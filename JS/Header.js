//constantes
const btnMenuHamburguesa = document.getElementById('btnMenuHamburguesa');
const btnModoNoc = document.getElementById('btnModoNoc');
const btnFavoritos = document.getElementById('btnFavoritos');
const btnMisGifos = document.getElementById('btnMisGifos');
const btnCrearGifos = document.getElementById('btnCrearGifos');
const iconoHamburguesa = document.getElementById('iconoHamburguesa');
const contendorNav = document.getElementById('contendorNav');

//Cambio de ícono de menu 
btnMenuHamburguesa.addEventListener('click', () => {
    iconoHamburguesa.classList.toggle('fa-bars');
    iconoHamburguesa.classList.toggle('fa-times');
    contendorNav.classList.toggle('oculto')
})