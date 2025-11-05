// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("hidden"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.add("hidden"))
);

// Floating back-to-top button
const toTop = document.getElementById("toTop");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 400) {
      toTop.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      toTop.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
    } else {
      toTop.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      toTop.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    }
  },
  { passive: true }
);
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();