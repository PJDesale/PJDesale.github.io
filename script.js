// समर्थ फॅन्सी फटाके — website interactions
// WhatsApp number is stored in international format without '+' or spaces.
const WHATSAPP_NUMBER = "919421215265";

function whatsappUrl(productName = "") {
  const message = productName
    ? `नमस्कार, समर्थ फॅन्सी फटाके येथे ${productName} यांची किंमत आणि उपलब्धता जाणून घ्यायची आहे.`
    : "नमस्कार, समर्थ फॅन्सी फटाके येथे फटाक्यांचे प्रकार, किंमत आणि उपलब्धता जाणून घ्यायची आहे.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl(link.dataset.product || "");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
