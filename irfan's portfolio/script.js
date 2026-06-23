// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  toggle.innerText = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    toggle.innerText = "☀️ Light Mode";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggle.innerText = "🌙 Dark Mode";
  }
});

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const hamburgerIcon = hamburgerBtn.querySelector("i");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburgerIcon.classList.replace("fa-bars", "fa-times");
  } else {
    hamburgerIcon.classList.replace("fa-times", "fa-bars");
  }
});

// Auto-close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburgerIcon.classList.replace("fa-times", "fa-bars");
  });
});
