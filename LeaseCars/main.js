const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
// ------------------------------------------


  const menuBtn = document.querySelector('.menu-burger');
  const menuMobile = document.querySelector('.phone__header');
  menuBtn.addEventListener("click", () => {
      menuMobile.classList.toggle("menu--open")
  });

// ------------------------------------------

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content_item");
tabItem.forEach(function(element)  {
  element.addEventListener("click", open);
  
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button

  tabItem.forEach(function(item) {
    item.classList.remove("tabs__btn-item--active");
  })

  tabTarget.classList.add("tabs__btn-item--active");
  tabContent.forEach(function(item){
    item.classList.remove("tabs__content_item--active")
  })
  document.querySelector(`#${button}`).classList.add("tabs__content_item--active")
}

  