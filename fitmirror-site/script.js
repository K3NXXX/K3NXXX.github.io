const menuBtn = document.querySelector(".menu_btn");
const headerMenu = document.querySelector(".header__phone-menu");
menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("open--menu")
})
