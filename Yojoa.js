let currentIndex = 0;
const slides = document.querySelectorAll('.image-slider .slide');
const totalSlides = slides.length;

function changeSlide() {
    slides[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.opacity = '1';
}

setInterval(changeSlide, 1000); // Cambia cada segundo
