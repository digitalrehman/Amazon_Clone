let menu = document.getElementById("menu")
let closebar = document.getElementById("close")
let menupage= document.getElementById("menu-page")
let menuicon= document.getElementById("menu-icon")
let navbar= document.getElementById("nav-item")
const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function lefts() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slider.children.length - 1;
    }
    showSlide(slideIndex);
}

function rights() {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

showSlide(slideIndex);



menupage.style.display="none"
closebar.addEventListener("click",()=>{
    menupage.style.display="none"
})
menu.addEventListener("click",()=>{
    menupage.style.display="block"


})

menuicon.addEventListener("click",()=>{
    navbar.classList.toggle("nav-item")
})
