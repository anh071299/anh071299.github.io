//DOM: html đại diện toàn bộ nội dung trên trang 
//BOM: các đối tượng  trinh duyêt cung cấp
//window = globalThis
//DOM
//Moi thu trong HTML la cau truc rieng biet
//document.head;
//Không nên đặt script o head vi khi tai mã script mà các ptu trên trang chưa dc tải sẽ báo lỗi
// nếu đặt ở đầu thêm thuộc tính defer
//https://www.w3schools.com/js/js_htmldom_document.asp
// document > document.documentElement<Html> > document.body > div

// document.firstChild
// document.lastChild
// document.nextElementSibling// Lấy phần tử cùng cấp bên dưới
// document.previousElementSibling// Lấy phần tử cùng cấp bên trên

//Mọi thứ trong HTML deu tro thanh node trong DOM
//Child nodes: Chỉ bao gồm node la phan tu con truc tiep
//DOM Collections khong phai la mảng chuyển vê mảng Array.from(Collection)


// let div = document.body.firstElementChild.nextElementSibling;

// setInterval(function () {
//     let date = new Date().toTimeString();
//     let time = date.slice(0,8);
// div.textContent = time;
// }, 1000);

// let childs = document.body.children;
// childs = Array.from(childs);
// childs.forEach(element => {
//     if(element.tagName ==="H1"){
//         element.textContent = "okla";
//     }
// });

//Tạo một bảng, sử dụng JS để thay đổi màu cho các ô theo đường chéo trong bảng( sử dụng td.stytle.backgroundColor)
// let table = document.body.firstElementChild.nextElementSibling.nextElementSibling;
// let trs = Array.from(table.firstElementChild.rows);

// trs.forEach(function(tr){
//     let tds = Array.from(tr.cells);
//     tds.forEach(function(td){
//         if(tr.rowIndex == td.cellIndex){
//             td.style.backgroundColor = "red";
//         }
//     });
// });

//document.querySelector("tr:last-child td:first-child").style.backgroundColor= "yellow";

// document.querySelector("#demo").innerHTML = "<p>Paragraph</p>";//Chọn ra đầu tiên hợp lệ
// document.querySelector("#demo").innerHTML += "<p>Paragraph</p>";
//innerText = textContent

//
// let p = document.body.firstElementChild;
// console.log(p.dataset.type);

// let img = document.createElement("img");
// img.src = "https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/2/802649/Bat-Cuoi-Truoc-Loat-.png";
// document.body.prepend(img);

// let div = document.createElement("div");
// div.textContent = "okla";
// document.body.append(div);//prepend//before//after

// document.body.insertAdjacentText("afterbegin", "Tú Anh");

// document.body.removeChild(div);// xoa phan tu con
// div.remove();//tư xóa

//p.style.backgroundColor = "green";
//p.style.cssText = "";
//let styled = getComputedStyle(p);
//styled.color// THuoc tính chỉ đọc không thể thay đổi

//document.forms.element
//document.forms.value


