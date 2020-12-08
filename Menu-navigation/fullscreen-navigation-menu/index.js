"use strict";

// const body = document.querySelector('.page');
// const modal = document.querySelector('.modal');
// const menuIcon = document.querySelector('.menu-icon');
// const bodyWidth = body.offsetWidth;
// const windowWidth = window.innerWidth;
// const scrollWidth = windowWidth - bodyWidth;


// menuIcon.addEventListener('click', () => {
//   body.classList.toggle('page--lock');
//   menuIcon.classList.toggle('menu-icon--active');
//   modal.classList.toggle('modal__animation--active');

//   if (modal.classList.contains('modal__animation--active')) {
//     body.style.paddingRight = `${scrollWidth}px`;
//     modal.style.paddingRight = `${scrollWidth}px`;
//   } else {
//     body.style.paddingRight = ``;
//     modal.style.paddingRight = ``;
//   }
// });


var body = document.querySelector('.page');
var modal = document.querySelector('.modal');
var menuIcon = document.querySelector('.menu-icon');
var bodyWidth = body.offsetWidth;
var windowWidth = window.innerWidth;
var scrollWidth = windowWidth - bodyWidth;
menuIcon.addEventListener('click', function () {
  body.classList.toggle('page--lock');
  menuIcon.classList.toggle('menu-icon--active');
  modal.classList.toggle('modal__animation--active');

  if (modal.classList.contains('modal__animation--active')) {
    body.style.paddingRight = scrollWidth + "px";
    modal.style.paddingRight = scrollWidth + "px";
  } else {
    body.style.paddingRight = "";
    modal.style.paddingRight = "";
  }
});