const arrData = ['javascript', 'webpack', 'json', 'react', 'html', 'css', 'angular', 'typescript'];

const list = document.querySelector('ul');
const btn = document.querySelector('button');

const step = 2;
const pageLength = arrData.length;
let pageNumber = 0;
let stepStart = pageNumber * step;
let stepEnd = stepStart + step;


const getFragmentData = (arr) => {
  const fragmentData = arr.slice(stepStart, stepEnd);
  return fragmentData;
};

const renderList = (arr) => {
  arr.forEach(item => {
    list.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
  });
};

// init list with data
renderList(getFragmentData(arrData));

// btn eventListener
btn.addEventListener('click', () => {
  pageNumber++;
  stepStart = pageNumber * step;
  stepEnd = stepStart + step;

  if (stepEnd >= pageLength) {
    btn.disabled = true;
  }

  renderList(getFragmentData(arrData));
});