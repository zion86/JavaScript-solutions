let count = 0;
const counter = document.querySelector('.counter');
const addBtn = document.querySelector('.add');
const minBtn = document.querySelector('.min');
const resetBtn = document.querySelector('.reset');
counter.textContent = count;

const addCount = () => {
  count += 1;
  counter.textContent = count;
};
addBtn.addEventListener('click', addCount);

const minCount = () => {
  count -= 1;
  counter.textContent = count;
};
minBtn.addEventListener('click', minCount);

const resetCount = () => {
  count = 0;
  counter.textContent = count;
};
resetBtn.addEventListener('click', resetCount);