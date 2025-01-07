document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.querySelector('.loading-bar');
    const loadingText = document.querySelector('.loading-text');
    const loadingScreen = document.querySelector('.loading-screen');

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';
        }
        loadingBar.style.width = `${progress}%`;
        loadingText.textContent = `LOADING - ${Math.round(progress)}%`;
    }, 50);

    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const characterIcons = document.querySelectorAll('.character-icon');
    characterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            console.log(`Clicked on ${icon.alt}`);
        });
    });

    const slides = document.querySelectorAll('.slideshow-container img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    setInterval(nextSlide, 4000);

});