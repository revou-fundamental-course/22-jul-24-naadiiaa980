// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.banner-slide img');
    let currentIndex = 0;

    setInterval(() => {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });

        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    }, 5000); // Ubah slide setiap 5 detik
});
