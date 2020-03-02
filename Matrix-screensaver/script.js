const canvas = document.querySelector('.canvas');
const $ = canvas.getContext('2d');
const w = canvas.width = innerWidth;
const h = canvas.height = innerHeight;
const characters = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я";
const matrix = [...characters];

const font = 18;
const col = w / font;
let arr = [];

for (let i = 0; i < col; i++) {
  arr[i] = 1;
}

const draw = () => {
  $.fillStyle = 'rgba(0, 0, 0, 0.10)';
  $.fillRect(0, 0, w, h);
  $.fillStyle = '#0f0';
  $.font = `${font}px sans-serif`;

  for(let i = 0; i < arr.length; i++) {
    const txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);

    if (arr[i] * font > h && Math.random() > 0.975) {
      arr[i] = 0;
    }
    arr[i]++;
  }
};

setInterval(draw, 60);
window.addEventListener('resize', () => location.reload());