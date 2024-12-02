const carouselStates = {
    libros: 0,
    herramientas: 0,
    postres: 0,
    tecnologia: 0,
    accesorios: 0,
    variados: 0
};

function changeSlide(section, direction) {
    // Obtener elementos del carrusel
    const carousel = document.querySelector(`#${section} .carousel`);
    const slides = carousel.getElementsByClassName('carousel-item');
    
    // Actualizar el índice
    carouselStates[section] += direction;
    
    // Ajustar límites
    if (carouselStates[section] >= slides.length) {
        carouselStates[section] = 0;
    }
    if (carouselStates[section] < 0) {
        carouselStates[section] = slides.length - 1;
    }
    
    // Actualizar visibilidad
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[carouselStates[section]].classList.add('active');
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // Asegurarse de que el primer slide esté activo en cada carrusel
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const firstSlide = carousel.querySelector('.carousel-item');
        if (firstSlide) {
            firstSlide.classList.add('active');
        }
    });
});