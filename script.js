const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a nav link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Scroll reveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });
