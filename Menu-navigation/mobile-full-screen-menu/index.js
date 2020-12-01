"use strict";

var icon = document.querySelector('.icon');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');
var body = document.querySelector('body');
icon.addEventListener('click', function () {
  menu.classList.toggle('menu--full');
  header.classList.toggle('header--full-height');
  body.classList.toggle('block-scroll');
});


var mq = window.matchMedia('(min-width: 700px)');
var widthChange = function widthChange(mq) {
  if (mq && header.classList.contains('header--full-height')) {
    menu.classList.toggle('menu--full');
    header.classList.toggle('header--full-height');
    body.classList.toggle('block-scroll');
  }
};

mq.addListener(widthChange);