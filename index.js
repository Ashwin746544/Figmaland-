var hambergerIcon = document.querySelector(".hamberger");
var navbar = document.querySelector("nav");
var mediaQuary = window.matchMedia("(max-width: 575px)");
var changedToh2 = document.querySelector(".changedToh2");

hambergerIcon.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
})

mediaQuary.addListener(change);
function change() {
  if (mediaQuary.matches) {
    changedToh2.outerHTML = "<h2 class='myH2'>" + changedToh2.innerHTML + "</h2>";
    console.log("fhhfjhf");
  }
}