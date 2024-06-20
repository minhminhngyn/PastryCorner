const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
  });
});
function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
const navLink=document.querySelectorAll('.nav_link')
const linkAction = ()=>{
  const navMenu=document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))