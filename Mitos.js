function toggleText(cuadro) {
    const imagen = cuadro.querySelector('img');
    const contenido = cuadro.querySelector('.contenido');

    if (contenido.style.opacity === "1") {
        contenido.style.opacity = "0"; // Oculta el contenido
        imagen.style.opacity = "1"; // Muestra la imagen
    } else {
        contenido.style.opacity = "1"; // Muestra el contenido
        imagen.style.opacity = "0"; // Oculta la imagen
    }
}

