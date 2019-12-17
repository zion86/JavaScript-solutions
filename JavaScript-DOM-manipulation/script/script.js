const body = document.body;
const container = document.querySelector('.container');
const ul = document.createElement('ul');
container.appendChild(ul);
const display = document.querySelector('.display');

const colors = ['green', 'red', 'grey', 'blue', 'orange', 'pink'];
const div = document.querySelector('.background');

const render = colors.map(color => {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.style.backgroundColor = color;

  li.addEventListener('click', () => {
    display.style.backgroundColor = color;
    display.textContent = color;
  });
});
