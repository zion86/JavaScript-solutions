let colors = ['green', 'lime', 'tomato', 'blue', 'red', 'darkgrey', 'pink', 'gold', 'brown'];
let rand = colors.sort(() => 0.5 - Math.random());

const body = document.body;
const div = document.createElement('div');
body.append(div);

rand.forEach((el, i) => {
  setTimeout(() => {
    const cube = document.createElement('div');
    div.append(cube);
    cube.style.backgroundColor = `${el}`;
  }, i * 1000);
});