'use strict';

const phoneInput = document.querySelector('.phone-input');

phoneInput.addEventListener('input', ({ target }) => {
  let num = target.value
    .replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

  target.value = !num[2] ? num[1] : '(' + num[1] + ') - ' + num[2] + (!num[3] ? '' : ' - ' + num[3]);
});