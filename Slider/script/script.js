const colors = ['tomato', 'blue', 'pink', 'limegreen'];

const container = document.querySelector('.container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const lastIndex = colors.length - 1;

// init container color
container.style.backgroundColor = colors[currentIndex];

nextBtn.addEventListener('click', () => {
  if(currentIndex >= lastIndex) {
    currentIndex = 0;
    container.style.backgroundColor = colors[currentIndex];
  } else {
    currentIndex += 1;
    container.style.backgroundColor = colors[currentIndex];
  }
});

prevBtn.addEventListener('click', () => {
  if(currentIndex <= 0) {
    currentIndex = lastIndex;
    container.style.backgroundColor = colors[currentIndex];
  } else {
    currentIndex -= 1;
    container.style.backgroundColor = colors[currentIndex];
  }
});