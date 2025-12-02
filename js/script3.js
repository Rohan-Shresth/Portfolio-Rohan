document.getElementById("year").textContent = new Date().getFullYear();
=
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";
});

const form = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    messageDiv.textContent = "Please fill out all fields.";
    messageDiv.style.color = "red";
    return;
  }

  messageDiv.textContent = "Message sent! Thank you!";
  messageDiv.style.color = "green";

  form.reset();
});
