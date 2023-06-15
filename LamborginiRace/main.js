const menuBtn = document.querySelector('.menu_btn');
const menuMobile = document.querySelector('.menu__mobile');
menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("menu--open")
});