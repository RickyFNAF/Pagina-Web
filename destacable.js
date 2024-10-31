function mostrarInfo() {
    const infoCuadro = document.getElementById('infoCuadro');
    infoCuadro.style.display = 'block';

    // Añadir efecto de explosión
    infoCuadro.style.transform = 'scale(1.5)';
    setTimeout(() => {
        infoCuadro.style.transform = 'scale(1)';
    }, 500);
}
