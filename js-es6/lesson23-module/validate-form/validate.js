
let form = document.querySelector(".needs-validation");
const email = form.elements.email;
email.addEventListener("blur", function () {
  checkEmail();
});

function checkEmail() {
  let error = email.nextElementSibling;
  let value = email.value.trim();
  let validRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (value.length == "") {
    error.textContent =
    "Vui lòng điền email";
    email.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Email không hợp lệ";
    email.classList.add("is-invalid");
    return false;
  } else {
    email.classList.remove("is-invalid");
    return true;
  }
}

//password
let password = form.elements.password;
password.addEventListener("keyup", function () {
  checkPassword();
});

function checkPassword() {
  let error = password.nextElementSibling;
  let value = password.value.trim();
  let validRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (value.length == "") {
    error.textContent =
    "Vui lòng điền mật khẩu";
  password.classList.add("is-invalid");
  return false;
  } else 
  if (!value.match(validRegex)) {
    error.textContent =
      "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, chứa ít nhất 1 ký tự đặc biệt, chứa ít nhất 8 ký tự";
    password.classList.add("is-invalid");
    return false;
  } else {
    password.classList.remove("is-invalid");
    return true;
  }
}


export default function(){
  if (
    !checkEmail() ||
    !checkPassword() 
  ) {
    ev.preventDefault();
    return false;
  }
  else{
    return true;
  }
}