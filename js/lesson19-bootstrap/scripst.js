// check username
let form = document.querySelector(".needs-validation");
let username = form.elements.name;
username.addEventListener("keyup", function () {
  checkName();
});
let usernameError = true;
function checkName() {
  let error = username.nextElementSibling;
  let value = username.value.trim();
  if (value === "") {
    error.textContent = "Ho tên không được để trống";
    username.classList.add("is-invalid");
    usernameError = false;
    return false;
  } else {
    username.classList.remove("is-invalid");
  }
}
// check email
const email = form.elements.email;
let emailError = true;
email.addEventListener("blur", function () {
  checkEmail();
});
function checkEmail() {
  let error = email.nextElementSibling;
  let value = email.value.trim();
  let validRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (!value.match(validRegex)) {
    error.textContent = "Email không hợp lệ";
    email.classList.add("is-invalid");
    emailError = false;
    return false;
  } else {
    email.classList.remove("is-invalid");
  }
}
// check phone
let phone = form.elements.phone;
phone.addEventListener("keyup", function () {
  checkPhone();
});
let phoneError = true;
function checkPhone() {
  let error = phone.nextElementSibling;
  let value = phone.value.trim();
  let validRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (!value.match(validRegex)) {
    error.textContent = "Số điện thoại sai định dạng";
    phone.classList.add("is-invalid");
    phoneError = false;
    return false;
  } else {
    phone.classList.remove("is-invalid");
  }
}
// check Password
let password = form.elements.password;
password.addEventListener("keyup", function () {
  checkPassword();
});
let passwordError = true;
function checkPassword() {
  let error = password.nextElementSibling;
  let value = password.value.trim();
  let validRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!value.match(validRegex)) {
    error.textContent =
      "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, chứa ít nhất 1 ký tự đặc biệt, chứa ít nhất 8 ký tự";
    password.classList.add("is-invalid");
    passwordError = false;
    return false;
  } else {
    password.classList.remove("is-invalid");
  }
}
//check nhap lai mat khau
let conPassword = form.elements.conPassword;
conPassword.addEventListener("keyup", function () {
  checkConPassword();
});
let conPasswordError = true;
function checkConPassword() {
  let error = conPassword.nextElementSibling;
  let passwordValue = password.value;
  let conPasswordValue = conPassword.value;
  if (passwordValue !== conPasswordValue) {
    error.textContent = "Nhập lại mật khẩu chưa đúng";
    conPassword.classList.add("is-invalid");
    conPasswordError = false;
    return false;
  } else {
    conPassword.classList.remove("is-invalid");
  }
}
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function (ev) {
  checkName();
  checkEmail();
  checkPhone();
  checkPassword();
  checkConPassword();
  if (
    (usernameError == true) &&
    (emailError == true) &&
    (phoneError == true) &&
    (passwordError == true) &&
    (conPasswordError == true)
  ) {
    return true;
  } else {
    ev.preventDefault();
    
  }
});
