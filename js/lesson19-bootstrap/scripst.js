// check username
let form = document.querySelector(".needs-validation");
let username = form.elements.name;

username.addEventListener("keyup", function () {
  checkName();
});
function checkName() {
  let error = username.nextElementSibling;
  let value = username.value.trim();
  if (value === "") {
    error.textContent = "Ho tên không được để trống";
    username.classList.add("is-invalid");
    return false;
  } else {
    username.classList.remove("is-invalid");
    return true;
  }
}
// check email
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
// check phone
let phone = form.elements.phone;
phone.addEventListener("keyup", function () {
  checkPhone();
});

function checkPhone() {
  let error = phone.nextElementSibling;
  let value = phone.value.trim();
  let validRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (value.length == "") {
    error.textContent =
    "Vui lòng điền số điện thoại";
    phone.classList.add("is-invalid");
    return false;
  } else if(!value.match(validRegex)) {
    error.textContent = "Số điện thoại sai định dạng";
    phone.classList.add("is-invalid");
    return false;
  } else {
    phone.classList.remove("is-invalid");
    return true;
  }
}
// check Password
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
  } else if (!value.match(validRegex)) {
    error.textContent =
      "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số, chứa ít nhất 1 ký tự đặc biệt, chứa ít nhất 8 ký tự";
    password.classList.add("is-invalid");
    return false;
  } else {
    password.classList.remove("is-invalid");
    return true;
  }
}
//check nhap lai mat khau
// let conPassword = form.elements.conPassword;
// conPassword.addEventListener("keyup", function () {
//   checkConPassword();
// });

// function checkConPassword() {
//   let error = conPassword.nextElementSibling;
//   let passwordValue = password.value.trim();
//   let conPasswordValue = conPassword.value.trim();
//   if (passwordValue !== conPasswordValue) {
//     error.textContent = "Nhập lại mật khẩu chưa đúng";
//     conPassword.classList.add("is-invalid");
//     return false;
//   } else {
//     conPassword.classList.remove("is-invalid");
//     return true;
//   }
// }
// click submit
let submit = document.getElementById("submitBtn");
submit.addEventListener("click", function (ev) {
  if (
    !checkName() &&
    !checkEmail() &&
    !checkPhone() &&
    !checkPassword() 
    // !checkConPassword()
  ) {
    ev.preventDefault();
    return false;
  }
  return true;
});
