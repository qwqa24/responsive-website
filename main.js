'use strict';

//넷바 색상 변경 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('nacvar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//넷바메뉴 선택시 해당 부분으로 이동하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//contactMeBtn 버튼 이동하기d
const cintactMeBtn = document.querySelector(".home__contact");
cintactMeBtn.addEventListener("click", () => {
    scrollIntoView("contact");
});

//contact btn
const homeMainHeight = document.querySelector("#home").getBoundingClientRect().height;
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if(window.scrollY/homeMainHeight > 0.5)
    arrowUp.classList.add("visible");
    else
     arrowUp.classList.remove("visible");
});
arrowUp.addEventListener("click", () =>{
    scrollIntoView("#home");
});

//home 투명도 조절
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height
document.addEventListener("scroll", () => {
    console.log(homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//햄버거 메뉴 클릭할때
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    // console.log(navbarMenu.classList.toggle("open"))
    navbarMenu.classList.toggle("open");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" })
}