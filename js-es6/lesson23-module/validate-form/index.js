import validate from "../validate.js";
let form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (ev) {

  if (
   validate()
  ) {
    console.log("ok");
  }
  
});