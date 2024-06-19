const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll(".nav_link");
const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))
document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  /*document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const loginBtn = document.getElementById("login-btn");

    // Kiểm tra trạng thái cuộn của trang
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Kiểm tra ngay khi tải trang
    // Xử lý sự kiện đăng nhập
    loginBtn.addEventListener("click", function() {
        // Giả sử người dùng đã đăng nhập
        const userLoggedIn = true; // Thay đổi trạng thái đăng nhập tại đây

        if (userLoggedIn) {
            loginBtn.innerHTML = '<i class="fa-solid fa-user"></i>';
        }
    });
});*/