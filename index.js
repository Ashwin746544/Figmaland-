var hambergerIcon = document.querySelector(".hamberger");
var navbar = document.querySelector("nav");

hambergerIcon.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
})