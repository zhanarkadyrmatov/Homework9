const headerToggle = document.querySelector(".header__toggle");
const menu = document.querySelector(".menu");
const btns = menu.getElementsByClassName("menu__item");

headerToggle.addEventListener("click", function () {
  menu.classList.toggle("menu__burger");
});
