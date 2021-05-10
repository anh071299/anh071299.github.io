// Cho mảng các object chứa các thông tin về học viên
let students = [
  {
    name: "Bùi Thanh Hà",
    age: 35,
    gender: "M",
  },
  {
    name: "Nguyễn Trường Giang",
    age: 27,
    gender: "M",
  },
  {
    name: "Phạm Minh Tuấn",
    age: 26,
    gender: "M",
  },
  {
    name: "Cung Bùi Tuấn Anh",
    age: 28,
    gender: "M",
  },
  {
    name: "Trịnh Bá Hưng",
    age: 27,
    gender: "M",
  },
  {
    name: "Đỗ Phương Thảo",
    age: 22,
    gender: "F",
  },
  {
    name: "Đặng Vũ Lam Mai",
    age: 22,
    gender: "F",
  },
  {
    name: "Đỗ Thanh Lam",
    age: 24,
    gender: "F",
  },
  {
    name: "Nguyễn Phương Hà",
    age: 25,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Tuệ Minh",
    age: 19,
    gender: "F",
  },
  {
    name: "Nguyễn Đỗ Anh Minh",
    age: 18,
    gender: "M",
  },
];

/**
 * Viết CT JavaScript tạo bảng danh sách học viên
 * Tạo các thành phần HTML sử dụng: document.createDocument()
 * Thêm bảng vào div#app
 */
let table = document.createElement("table");
table.setAttribute("id", "table");
let divApp = document.getElementById("app");
divApp.appendChild(table);
for (r = 0; r < students.length; r++) {
  let tr = document.createElement("tr");
  for (let i in students[r]) {
    if (r == 0) {
      let th = document.createElement("th");
      th.appendChild(document.createTextNode(i));
      tr.appendChild(th);
    } else {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(students[r][i]));
      tr.appendChild(td);
    }
  }
  table.appendChild(tr);

  function createRow(student) {}
}

/**
 * Thêm event cho các hàng, highlight hàng khi di chuột qua
 * Sử dụng event: mouseover, mouseout, mousein, ...
 */
let rows = table.rows;
console.log(rows);
for (i = 0; i < rows.length; i++) {
  rows[i].onmouseover = function () {
    this.setAttribute("style", "background-color: red;");
  };
  rows[i].onmouseout = function () {
    this.removeAttribute("style");
  };
}

/**
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm,
 * và icon hiển thị trạng thái tăng/giảm)
 */
// function increase() {
//   return a - b;
// }
// function decrease() {
//   return b - a;
// }
let ageCln = table.getElementsByTagName("th")[1];
ageCln.setAttribute("onclick", "sortTable(1)");

function sortTable(n) {
  let switching,
    shouldSwitch,
    x,
    y,
    dir,
    switchcount = 0;
  dir = "asc";
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName("td")[n].innerHTML);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[n].innerHTML);
      if (dir == "asc") {
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      table.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
/**
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */
let form = document.createElement("form");
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "inputName");
input.setAttribute("placeholder", "Enter your search name");
divApp.insertAdjacentElement("afterEnd", form);
let button = document.createElement("button");
button.innerHTML = "Search";
button.setAttribute("onclick", "search()");
button.setAttribute("type", "button");
form.appendChild(button);
form.append(input);
function search() {
  let searchName = input.value.toLowerCase();
  for (let i = 1; i < rows.length; i++) {
    let tdN = rows[i].getElementsByTagName("td")[0];
    if (tdN) {
      if (tdN.innerText.toLowerCase().indexOf(searchName) > -1) {
        let mark = document.createElement("mark");
        table.insertBefore(mark, rows[i]);
        mark.appendChild(rows[i]);
      }
    }
  }
}

/**
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */
//check empty
let insertRow =
  '<form><label>Name: <input type="text" name="name" id="name" /></label><br /><label>Age: <input type="number" id="age" /></label><br /> Gender:<label><input type="radio" name="gender" id="woman" value="woman" />F</label><label><input type="radio" name="gender" id="man" value="man" />M</label><button onclick="insertNewRow()" type="button">Add</button></form>';
table.insertAdjacentHTML("afterend", insertRow);

function insertNewRow() {
  let ipName = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let genders = document.getElementsByName("gender");
  let gender;
  for (i = 0; i < genders.length; i++) {
    if (genders[i].checked == true) {
      gender = genders[i];
    } else gender = "";
  }
  if (ipName != "" && age != "" && gender.value != "") {
    let newRow = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.innerHTML = ipName;
    let td1 = document.createElement("td");
    td1.innerHTML = age;
    let td2 = document.createElement("td");
    td2.innerHTML = gender.value;
    newRow.appendChild(td0);
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    table.appendChild(newRow);
  }
}
