const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

showSlides();

setInterval(showSlides, 4000);
