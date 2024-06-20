
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
  