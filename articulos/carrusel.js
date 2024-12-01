function plusSlides(carruselId, n) {
    let i;
    let carrusel = document.getElementById(carruselId);
    let slides = carrusel.getElementsByClassName("carrusel-item");
    let slideIndex = 0;
    
    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            slideIndex = i;
            slides[i].classList.remove("active");
            break;
        }
    }
    
    slideIndex += n;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides[slideIndex].classList.add("active");
}

