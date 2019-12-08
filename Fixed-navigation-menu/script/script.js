const navigationMenu = document.querySelector(".nav");
const distanceTonavigationMenu = navigationMenu.offsetTop;

const fixedNav = () => {
  // console.log(distanceTonavigationMenu, window.scrollY);
  
  if (window.scrollY >= distanceTonavigationMenu) {
    navigationMenu.classList.add("nav--fixed");
  } else {
    navigationMenu.classList.remove("nav--fixed");
  }
}

window.addEventListener("scroll", fixedNav);