const toggleMenu = () => {
  const getMenu = document.querySelector('.menu-btn');
  const getList = document.querySelector('.nav__list');

  getMenu.classList.toggle('menu-btn--open');
  getList.classList.toggle('nav__list--open');
}

const getMenuBtn = document.querySelector('.menu-btn');
getMenuBtn.addEventListener('click', toggleMenu);