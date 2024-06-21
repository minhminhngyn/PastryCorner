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
  const userIcon = document.getElementById("user-icon");
  const userDropdown = document.querySelector(".dropdown-user");
  const dropdownMenu = document.querySelector(".dropdownuser");
  const accountInfoLink = document.getElementById("account-info");
  const logoutLink = document.getElementById("logout");

  let registeredUser = {
      username: "",
      email: "",
      password: ""
  };

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

  const registerForm = forms.register.querySelector("form");
  registerForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = registerForm.querySelector("input[type='text']").value;
      const email = registerForm.querySelector("input[type='email']").value;
      const password = registerForm.querySelector("input[type='password']").value;

      registeredUser = { username, email, password };

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      hideForms();
      showForm(forms.login);

      const loginForm = forms.login.querySelector("form");
      loginForm.querySelector("input[type='email']").value = registeredUser.email;
      loginForm.querySelector("input[type='password']").value = registeredUser.password;
  });

  const loginForm = forms.login.querySelector("form");
  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const email = loginForm.querySelector("input[type='email']").value;
      const password = loginForm.querySelector("input[type='password']").value;

      if (email === registeredUser.email && password === registeredUser.password) {
          localStorage.setItem("isLoggedIn", "true");
          window.location.href = "index.html";
      } else {
          alert("Thông tin đăng nhập không chính xác!");
      }
  });

  if (localStorage.getItem("isLoggedIn") === "true") {
      if (loginBtn) {
          loginBtn.style.display = "none";
          userDropdown.style.display = "inline-block";
      }

      userIcon.addEventListener("click", function() {
          dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
      });

      accountInfoLink.addEventListener("click", function() {
          window.location.href = "accinfo.html";
      });

      logoutLink.addEventListener("click", function(event) {
          event.preventDefault();
          if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
              localStorage.removeItem("isLoggedIn");
              window.location.href = "index.html";
          }
      });
  } else {
      localStorage.removeItem("isLoggedIn");
  }

  document.addEventListener("click", function(event) {
      if (!userDropdown.contains(event.target) && !userIcon.contains(event.target)) {
          dropdownMenu.style.display = "none";
      }
  });
});
