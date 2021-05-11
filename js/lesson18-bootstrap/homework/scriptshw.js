let toggleBtn = document.querySelector(".menu-toggle");
let topMenu = document.querySelector(".top-menu");
toggleBtn.addEventListener("click", function (ev) {
  topMenu.classList.toggle("show");
});
