window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

var links = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    }
  });
}

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-links a");

  var current = "";
  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      current = sections[i].getAttribute("id");
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
    if (navLinks[j].getAttribute("href") === "#" + current) {
      navLinks[j].classList.add("active");
    }
  }
});

var dots = document.querySelectorAll(".dot");
for (var k = 0; k < dots.length; k++) {
  dots[k].addEventListener("click", function () {
    var allDots = document.querySelectorAll(".dot");
    for (var m = 0; m < allDots.length; m++) {
      allDots[m].classList.remove("active");
    }
    this.classList.add("active");
  });
}
