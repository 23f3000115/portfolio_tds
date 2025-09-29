// Typing Effect
const typing = document.querySelector(".typing");
const roles = ["Software Engineer", "Cloud Specialist", "Web Developer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = roles[i].substring(0, j--);
    }
    typing.textContent = current;

    if (!isDeleting && j === roles[i].length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
    setTimeout(type, isDeleting ? 80 : 120);
  }
}
type();

// Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
