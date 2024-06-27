let currentIndex = 0;

function slide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slidesPerView = window.innerWidth <= 768 ? 2 : 4;
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesPerView; // Show last set of slides if going left from first set
    }

    if (currentIndex >= totalSlides - (slidesPerView - 1)) {
        currentIndex = 0; // Show first set of slides if going right from last set
    }

    slider.style.transform = `translateX(${-currentIndex * (100 / slidesPerView)}%)`;
}

window.addEventListener('resize', () => {
    const slider = document.querySelector('.slider');
    const slidesPerView = window.innerWidth <= 768 ? 2 : 4;
    slider.style.transform = `translateX(${-currentIndex * (100 / slidesPerView)}%)`;
});

// Swipe functionality
let startX;
let endX;

const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        slide(1); // Swipe left to go to the next slide
    } else if (startX < endX - 50) {
        slide(-1); // Swipe right to go to the previous slide
    }
});
