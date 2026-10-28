const menuButton = document.getElementById("menu-btn");
const navigation = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.textContent = open ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");
  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  // Replace this with your real email address to enable the email draft.
  const recipient = "your-email@example.com";
  if (recipient === "your-email@example.com") {
    status.textContent = "Demo form: replace your-email@example.com in script.js with your email address.";
    return;
  }
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
  status.textContent = "Opening your email app...";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
