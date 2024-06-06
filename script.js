// Obtener los elementos
const button = document.querySelector('#mostrarOcultar');
const elementoAocultar = document.querySelector('#elementoAocultar');

// Agregar un evento de clic al botón
button.addEventListener('click', () => {
    // Alternar la visibilidad del elemento
    if (elementoAocultar.style.display === 'none') {
        elementoAocultar.style.display = 'block';
    } else {
        elementoAocultar.style.display = 'none';
    }
});
