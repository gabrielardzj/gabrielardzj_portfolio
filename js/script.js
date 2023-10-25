const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {    
    console.log("Hamburguesa clickeada");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});