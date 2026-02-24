// Navbar scroll effect
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Hide preloader when page loads
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }
});

// Mobile menu toggle
var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });
}

// Smooth scroll for navigation links
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

// Active navigation highlight on scroll
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navLinksElements = document.querySelectorAll(".nav-links a");

  if (sections.length > 0 && navLinksElements.length > 0) {
    var current = "";
    for (var i = 0; i < sections.length; i++) {
      var sectionTop = sections[i].offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = sections[i].getAttribute("id");
      }
    }

    for (var j = 0; j < navLinksElements.length; j++) {
      navLinksElements[j].classList.remove("active");
      if (navLinksElements[j].getAttribute("href") === "#" + current) {
        navLinksElements[j].classList.add("active");
      }
    }
  }
});

// Project slider dots
var dots = document.querySelectorAll(".dot");
if (dots.length > 0) {
  for (var k = 0; k < dots.length; k++) {
    dots[k].addEventListener("click", function () {
      var allDots = document.querySelectorAll(".dot");
      for (var m = 0; m < allDots.length; m++) {
        allDots[m].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var formData = new FormData(contactForm);
      var name = formData.get("name");
      var email = formData.get("email");
      var subject = formData.get("subject");
      var message = formData.get("message");

      // Create mailto link
      var mailtoLink =
        "mailto:heangsat1523@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject || "Message from Portfolio") +
        "&body=" +
        encodeURIComponent(
          "Name: " +
            name +
            "\n" +
            "Email: " +
            email +
            "\n\n" +
            "Message:\n" +
            message,
        );

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      alert(
        "Thank you for your message! Your email client will open to send the message.",
      );

      // Reset form
      contactForm.reset();
    });
  }
});

// Add scroll reveal animation
window.addEventListener("scroll", function () {
  var reveals = document.querySelectorAll(
    ".project-card, .service-card, .stat-item",
  );

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-active");
    }
  }

  // Back to top button visibility
  var backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }
});

// Back to top button click handler
var backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
