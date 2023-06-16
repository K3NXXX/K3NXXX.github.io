const titleAnimation = document.querySelector(".intro__title")
window.addEventListener("load", function () {
   titleAnimation.style.transform = "scale(1)"

});

// -------menu-----
const blackBg = document.querySelector(".black-bg")
const navBtn = document.querySelector(".navigation-span")
const bgLinks = document.querySelector(".black-bg__links")
navBtn.addEventListener("click", function(){
    blackBg.classList.toggle("black-bg-active")
    bgLinks.classList.toggle("link-active")
    
    if (blackBg.classList.contains("black-bg-active")) {
        document.body.style.cssText = `
        position: fixed; 
        overflow-y:scroll;

        `
        blackBg.style.opacity="1"

    } else {
        document.body.style.cssText = `
        position: static; 
        overflow-y:scroll
        `
        blackBg.style.opacity="0"
    }
   
})
// ----popup open---------
const popupOpen = document.querySelector(".open-popup")
const popupClose = document.querySelector(".popup-close")
const popup = document.querySelector(".popup-bg")
popupOpen.addEventListener("click", function(a){
    a.preventDefault()
    document.body.classList.add("no-scroll")
    popup.classList.add("fade-in");
    popup.style.cssText = `
    display: flex;
    `
    
})

// ----popup close---------
popupClose.addEventListener("click", function(){
    popup.classList.add("fade-out");
    setTimeout(() => {
      popup.classList.remove("fade-out");
      popup.style.cssText = `
        display: none;
      `
    }, 500);
    document.body.classList.remove("no-scroll")
})

// -------images show--------
function onEntry(entry){
    entry.forEach(function(change){
        if(change.isIntersecting){
            change.target.classList.add("element-show")
        }
    })
}
let options = {threshold: [0.5]}
let observer = new IntersectionObserver(onEntry,options)
let elements = document.querySelectorAll(".intro-img")
for(let elem of elements){
    observer.observe(elem)
}





