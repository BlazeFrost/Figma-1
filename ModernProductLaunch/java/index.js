//alert('Hi Java Script basic')
//header
const menuBtn = document.querySelector(".image-button");
const mobileMenu = document.querySelector("#mobile-nav");

menuBtn.addEventListener("click",
    () => {mobileMenu.classList.toggle("open");}
);