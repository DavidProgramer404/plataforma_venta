// Configuración del slider
const slider = document.querySelector('#slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

// Función para pasar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 0) % slides.length;
    updateSlider();
}

// Función para actualizar el slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Automáticamente pasar al siguiente slide cada cierto tiempo
setInterval(nextSlide, 400);
