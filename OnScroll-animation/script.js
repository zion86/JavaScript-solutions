const sections = [...document.querySelectorAll('.section')];

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;

  const addAnimation = sections.map((elem, i) => {
    const elemPosition = elem.offsetTop;    

    if (elemPosition < currentScroll) {
      elem.firstElementChild.classList.add(`box-${i}`)
    } else {
      elem.firstElementChild.classList.remove(`box-${i}`)
    }
  });
});