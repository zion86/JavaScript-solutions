const slides = [...document.querySelectorAll('.slides__img')];
let currentSlide = 0;

const nextSlide = () => {
  slides[currentSlide].className = 'slides__img';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slides__img slides__img--show';
};

const slideInterval = setInterval(nextSlide, 2000);