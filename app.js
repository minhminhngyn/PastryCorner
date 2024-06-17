let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});
const navMenu=document.getElementById('nav-bar'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navBar = document.getElementById("nav-bar");
  const header = document.getElementById("header");

  // Toggle navigation menu for mobile view
  navToggle.addEventListener("click", function () {
    navBar.classList.toggle("show");
    navToggle.innerHTML = navToggle.innerHTML === "menu" ? "close" : "menu"; // Change icon
  });

  // Change navbar color on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "var(--vintage4)";
      header.style.color = "var(--white)";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.color = "var(--vintage4)";
    }
  });

  // Auto scale slider height
  const slides = document.querySelectorAll(".slide .item");
  const setSlideHeight = () => {
    const height = window.innerHeight - header.offsetHeight;
    slides.forEach(slide => slide.style.height = `${height}px`);
  };
  setSlideHeight();
  window.addEventListener("resize", setSlideHeight);
});