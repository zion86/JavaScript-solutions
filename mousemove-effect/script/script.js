const box = document.querySelector('.box');
const value = 8;

box.addEventListener('mousemove', (e) => {
  let centerX = e.target.getBoundingClientRect().width / 2;
  let centerY = e.target.getBoundingClientRect().height / 2;
  let moveX = centerX - e.offsetX;
  let moveY = centerY - e.offsetY;
  e.target.style.transform = `rotateX(${moveY / value}deg) rotateY(${moveX / value}deg)`;
});