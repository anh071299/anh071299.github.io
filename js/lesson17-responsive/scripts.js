let toggle_button = document.querySelector(".toggle-button");
let menu = document.querySelector(".menu");
toggle_button.addEventListener("click", function (ev) {
    menu.classList.toggle("show");
})