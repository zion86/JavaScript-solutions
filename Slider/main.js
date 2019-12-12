const addBtn = document.querySelector(".addBtn");
const minBtn = document.querySelector(".minBtn");
const image = document.querySelector("img");

const list = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];

// Counter
let i = 0;
image.src = list[i];

// Use navigation Buttons
// ----------------------
addBtn.addEventListener("click", () => {
  if (i > list.length) i = 0;
  console.log(`Forward: ${i}`);
  image.src = list[i++];
});

minBtn.addEventListener("click", () => {
  if (i <= 0) i = list.length;
  console.log(`Back: ${i}`);
  image.src = list[--i];
});

// // Use setInterval
// // ---------------
// setInterval(() => {
//   if (i >= list.length) i = 0;
//   console.log(`Forward: ${i}`);
//   image.src = list[i++];
// }, 2000);