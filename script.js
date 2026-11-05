// Replace this with the email address where you want to receive inquiries.
const CONTACT_EMAIL = "REPLACE-WITH-YOUR-EMAIL@example.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  if (CONTACT_EMAIL.includes("REPLACE-WITH-YOUR-EMAIL")) {
    alert("Please add your contact email in script.js before using the inquiry form.");
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
