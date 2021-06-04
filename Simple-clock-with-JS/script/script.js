const hour =  document.querySelector('.clock--hours');
const minute = document.querySelector('.clock--minutes');
const second = document.querySelector('.clock--section--animation');

const clock = () => {
  const date = new Date();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;

  second.classList.toggle('clock--section--animation-action');
};

clock();
setInterval(clock, 1000);
