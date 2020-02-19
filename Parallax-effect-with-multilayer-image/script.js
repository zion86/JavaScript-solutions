window.addEventListener('scroll', () => {
  const contentHeight = document.querySelector('.parallax').scrollHeight;
  const scrollTopPosition = document.documentElement.scrollTop;
  const layers = [...document.querySelectorAll('.move')];

  if (scrollTopPosition < contentHeight) {
    layers.map(elem => {
      const speed = elem.getAttribute('speed');
      const movement = (scrollTopPosition * speed / 100);
      const translate3d = `translate3d(0, -${movement}px, 0)`;
      elem.style.transform = translate3d;
    });
  }
});