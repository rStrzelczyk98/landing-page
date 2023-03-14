"use stric";

const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");

menu.addEventListener("click", function (e) {
  if (e.target.closest(".hamburger")) {
    e.target.closest(".hamburger").classList.toggle("active");
    if (e.target.closest(".hamburger").classList.contains("active")) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }
});

nav.addEventListener("click", function (e) {
  if (
    menu.classList.contains("active") &&
    e.target.classList.contains("item")
  ) {
    nav.classList.remove("active");
    menu.classList.remove("active");
  }
});
