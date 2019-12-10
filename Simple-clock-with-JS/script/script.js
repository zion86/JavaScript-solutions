const clock = () => {
  let date = new Date();
  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const hour =  document.querySelectorAll('.clock--section')[0];
  hour.textContent = hours;
  
  const minute = document.querySelectorAll('.clock--section')[1];
  minute.textContent = minutes;

  const second = document.querySelector('.clock--section--animation');
  second.textContent = seconds;

  second.classList.toggle('clock--section--animation-action');
};

setInterval(clock, 1000);
clock();