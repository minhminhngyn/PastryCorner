document.addEventListener("DOMContentLoaded", function() {
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

  const navLinks = document.querySelectorAll('.nav_link');
  navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }));
});
