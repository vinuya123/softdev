let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

setInterval(nextSlide, 4000); 
