const backgroundColors = ['purple', 'tomato', 'yellow', 'pink'];
const button = document.querySelector('.btn');

let i = 0;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = backgroundColors[++i];
  
  if (i >= backgroundColors.length) {
    i = 0;
    document.body.style.backgroundColor = backgroundColors[i];
  };
});
