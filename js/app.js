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
document.addEventListener("DOMContentLoaded", function() {
  var ctaButtons = document.querySelectorAll(".CTAbutton");
  
  ctaButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var link = this.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
});
