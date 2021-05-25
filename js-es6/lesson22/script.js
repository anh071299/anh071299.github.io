/*
for()
for in object 
for of array
// */
// let sum = (a, b, ...args) => {
//   let total = a + b;
//   for(let arg of args){
//     total += arg;
//   }
//   return total;
// };
//  console.log(`Tong cua 3 va 4 la: ${sum(3,4)}`);

// let arr = [1,2,3,4,5,6,7]
// let [a, b, c,...args] = arr;
// console.log(args);

let students = [
  {
    name: "Tú Anh",
    age: 21,
    email: "tuanh@techmaster.vn",
  },
  {
    name: "Chị Hạnh",
    age: 30,
    email: "hanh@techmaster.vn",
  },
  {
    name: "Quang",
    age: 24,
    email: "quang@techmaster.vn",
  },
  {
    name: "Cường",
    age: 25,
    email: "cuong@techmaster.vn",
  },
  {
    name: "Hoàng",
    age: 29,
    email: "hoang@techmaster.vn",
  },
  {
    name: "Ngọc",
    age: 27,
    email: "ngoc@techmaster.vn",
  },
  {
    name: "Huy",
    age: 19,
    email: "huy@techmaster.vn",
  },
];
// let sortAge = students.sort(({age:a}, {age:b}) => a-b);
// console.log(sortAge);

// let oldPerson = students.filter(({age})=> age>=20).sort(({age:a}, {age:b}) => a-b);
// console.log(oldPerson);

// let oldPerson = students.reduce((total,{age})=> (total + age),0);
// console.log(oldPerson);
let studentTbl = document.getElementById("studentTbl");
let renderStudents = (students) =>
  students
    .map(
      ({ name, age, email }, i) => `
  <tr>
      <th scope="row">${i + 1}</th>
      <td>${name}</td>
      <td>${age}</td>
      <td>${email}</td>
      <td>
      <button class = "btn btn-danger" onclick="onEdit(this)"   data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <i class="bi bi-pencil"></i>
    </button>
      </td>
      <td>
         <button class = "btn btn-danger" onclick="onDelete(this)">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `
    )
    .join("");
document.getElementById("tbody").innerHTML = renderStudents(students);
let selectedRow = null;
// delete
function onDelete(td) {
  if (confirm("Are you sure to delete this student?")) {
    let row = td.parentElement.parentElement;
    let studentNo = row.cells[0].innerHTML;

    console.log(studentNo);
    studentTbl.deleteRow(row.rowIndex);
    document.getElementById("tbody").innerHTML = renderStudents(students);
  }
}

// add
function onFormSubmit() {
 
  if(checkValid()){
    let student = readForm();
    if (selectedRow == null) {
      insertNewStu(student);
    } else {
      updateRecord(student);
    }
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  selectedRow = null;
}

function readForm() {
  let student = {};
  student["name"] = document.getElementById("name").value;
  student["age"] = document.getElementById("age").value;
  student["email"] = document.getElementById("email").value;
  return student;
}

function insertNewStu(student) {
  students.push(student);
  document.getElementById("tbody").innerHTML = renderStudents(students);
}

// edit
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  console.log(selectedRow);
  document.getElementById("name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("age").value = selectedRow.cells[2].innerHTML;
  document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

// update
function updateRecord(student) {
  selectedRow.cells[1].innerHTML = student.name;
  selectedRow.cells[2].innerHTML = student.age;
  selectedRow.cells[3].innerHTML = student.email;
}
// valid

function checkValid(){
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let email = document.getElementById("email");
  if(name.value== ""){
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }
  if(age.value == ""){
    window.alert("Please enter your age");
    age.focus();
    return false;
  }
  if(email.value == ""){
    window.alert("Please enter your email");
    email.focus();
    return false;
  }
  return true;
}

