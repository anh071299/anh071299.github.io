// // let p = document.body.firstElementChild;
// // p.onclick = function () {
// //   alert(1);
// // };

// let form = document.forms.converter;
// let from = form.elements.from;
// let to = form.elements.to;
// let temp = form.elements.temp;
// let result = form.elements.result;
// let btn = form.elements.btnCovert;

// function toCelcius(from, value) {
//   if (from == "kevin") {
//     return value - 273;
//   } else if (from == "farenheit") {
//     return (value - 32) / 1.8;
//   } else {
//     return value;
//   }
// }

// function celciusTo(from, value) {
//   if (from == "kevin") {
//     return value + 273;
//   } else if (from == "farenheit") {
//     return value * 1.8 + 32;
//   } else {
//     return value;
//   }
// }
// function convert(event) {
//   console.log("Đây");
//   // this.textContent = "okla";
//     //event.stopPropagation();// Ngăn su kiện lan truyên di
//     //event.stopDefault();//Ngăn hành vi mặc định
//   let c = toCelcius(from.value, Number(temp.value));
//   result.value = celciusTo(to.value, c);
// }
// // function ahihi() {
// //     console.log("ahahhha");
// // }
// // btn.onclick = convert;
//  btn.addEventListener("click", convert, {
//      capture: false,
//      passive : false,
//      //once : true,
//  });
// //btn.addEventListener("click", ahihi);
// form.addEventListener("click",function () {
//     console.log("Click form");
// })