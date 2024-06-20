const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav_link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const dropdown = document.getElementById("dropdown");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      dropdown.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      dropdown.classList.remove("scrolled");
    }
  });
});
let searchbtn = document.querySelector(".searchbtn");
let closebtn = document.querySelector(".closebtn");
let searchbox = document.querySelector(".searchbox");

searchbtn.onclick = function () {
  searchbox.classList.add("active");
  closebtn.classList.add("active");
  searchbtn.classList.add("active");
};

closebtn.onclick = function () {
  searchbox.classList.remove("active");
  closebtn.classList.remove("active");
  searchbtn.classList.remove("active");
};

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
