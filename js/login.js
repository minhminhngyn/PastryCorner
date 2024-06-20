/*document.addEventListener("DOMContentLoaded", function () {
  const login = document.querySelector(".login");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const resetLink = document.querySelector(".reset-link");
  const loginbtn = document.querySelector(".nav_login-btn");
  const loginclose = document.querySelectorAll(".login-close");
  const overlay = document.querySelector(".overlay");

  // Show login form when clicking on Register link
  registerLink.addEventListener("click", function () {
    login.classList.add("active");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  resetLink.addEventListener("click", function () {
    login.classList.add("active");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  // Show register form when clicking on Login link
  loginLink.addEventListener("click", function () {
    login.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });
  // Show login popup when clicking on Login button in navigation
  loginbtn.addEventListener("click", function () {
    login.classList.add("active-popup");
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Close popup when clicking on close button (X)
  loginclose.forEach(function (btn) {
    btn.addEventListener("click", function () {
      login.classList.remove("active-popup");
      overlay.style.display = "none";
      document.body.style.overflow = "";
    });
  });

  // Close popup when clicking on overlay
  overlay.addEventListener("click", function () {
    login.classList.remove("active-popup");
    overlay.style.display = "none";
    document.body.style.overflow = "";
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
  
    const forms = {
      login: document.querySelector(".form-box.login"),
      register: document.querySelector(".form-box.register"),
      reset: document.querySelector(".form-box.reset")
    };
  
    const links = {
      login: document.querySelectorAll(".login-link"),
      register: document.querySelectorAll(".register-link"),
      reset: document.querySelector(".reset-link")
    };
  
    const loginBtn = document.querySelector(".nav_login-btn");
  
    function showForm(form) {
      for (const key in forms) {
        if (forms[key] === form) {
          forms[key].classList.add("active-popup");
        } else {
          forms[key].classList.remove("active-popup");
        }
      }
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  
    function hideForms() {
      for (const key in forms) {
        forms[key].classList.remove("active-popup");
      }
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  
    loginBtn.addEventListener("click", function () {
      showForm(forms.login);
    });
  
    links.login.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(forms.login);
      });
    });
  
    links.register.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        showForm(forms.register);
      });
    });
  
    links.reset.addEventListener("click", function (event) {
      event.preventDefault();
      showForm(forms.reset);
    });
  
    document.querySelectorAll(".login-close").forEach(closeBtn => {
      closeBtn.addEventListener("click", hideForms);
    });
  
    overlay.addEventListener("click", hideForms);
  });
  