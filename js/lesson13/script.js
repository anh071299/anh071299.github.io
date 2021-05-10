//Number

// let n = new Number(10);
// console.log(n.toString);
// console.log((10).toString);
// console.log(n.toString(2));//Chuyển đổi hệ cơ số 2
// parseInt("123asv", 2);// 2: la hệ co số chuyển đổi
// Math.ceil(5.3);//lam tron len

//Viết hàm tạo số tự nhiên ngẫu nhiên từ 0 -n

// function random(n){
//   console.log(Math.floor(Math.random() * n));
// }
// let n = Number(prompt("Nhập n"));
// random(n);

// Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác convert(value, from, to)
// function convert(value, from, to){
//     let temp =parseInt(value, from);
//     return temp.toString(to);
// }
//Viết hàm tao số ngẫu nhiên từ  a - b
// function random(a,b){
//     return(Math.random() * (b - a) + a);
// }

// SInh màu Hex
// function hex(){
//     return Math.random() * 255
// }

// Chuỗi

//  1. Viết hàm chuyển đổi một tên thành tên viết tắt.
// abbr(“Ba Nguyễn”); // “Ba N.”
// function nameConvert(name){
//     let space = name.indexOf(" ");
//     name = name.slice(0, space + 2);
//     return name + ".";
// }

// #### 2. Viết hàm ẩn địa chỉ email.
// Ví dụ
//hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”
// function  hide(name) {
//     let domain = name.indexOf("@");
//     domain = name.slice(domain);
//     let email = name.slice(0, 2);
//     return email + "..." + domain;
// }
// console.log(hide("BaNguyen@gmail.com"));
// #### 3. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap(“hello world”); // “Hello World”
// ```
// function cap(text) {
//   return text
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
// console.log(cap("hello world"));

// #### 4. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize.
// ```js
// // Ví dụ
// param(“Hello World”); // “hello-world”
// ```
// function param(str){
//     let nString = str.split(" ");
//     for(i in nString){
//         nString[i] = nString[i].toLowerCase();
//     }
//     return nString.join("-");
// }

//
// function param(str) {
//   return str
//     .split(" ")
//     .map(function(word) {
//       return word[0].toLowerCase() + word.slice(1);
//     })
//     .join("-");
// }
// console.log(param("Hello World"));
// #### 5. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại.

// ```js
// // Ví dụ
// revertCase(“aBcD”); // “AbCd”
// ```
// function revertCase(str){
//     let rl = "";
//     for(let i = 0 ; i < str.length; i++){
//         if('A' <= str[i] && str[i] <= 'Z'){
//             rl+=str[i].toLowerCase();

//         }else if('a' <= str[i] && str[i] <= 'z' ){
//             rl+=str[i].toUpperCase();
//         }
//     }
//     return rl;
// }
//  let x = "oaLNb";
// console.log(revertCase(x));
// #### 6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định.

// ```js
// // Ví dụ
// insertTo(“acde”, “b”, 1); // “abcde”
// ```
// function insertTo(str, subStr, index){
//     return str.slice(0,index) + subStr + str.slice(index);
// }
// #### 7. Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi.

// ```js
// // Ví dụ
// count(“abca”, “a”); // 2
// ```
// function count(str, subStr){
//     if(str.length == 0 || str.length == 0){
//         return 0;
//     }
//     let index = 0, count = 0;
//     while (true) {
//         index = str.indexOf(subStr, index);
//         if(index != -1 ){
//             count ++;
//             index += subStr.length;
//         }
//         else{
//             break;
//         }
//     }
//     return count;
// }
// console.log(count("anabagag", "ag"));
// #### 8. Viết hàm cắt chuỗi theo số từ chỉ định.

// ```js
// // Ví dụ
// slideWords(“My name is Ba”, 2); // “My name”
// ```
// function slideWords(str, amount){
//     return str.split(" ").slice(0,amount).join(" ");

// }
// #### 9. Viết hàm tạo chuỗi ngẫu nhiên với độ dài 32 ký tự.

// ```js
// // Ví dụ
// randomString(); // “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
// ```
// function randomString(){
//     let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}/?><|\`";
//     let text = "";
//     for(let i = 0; i < 32; i++){
//         let j=data.charAt(Math.floor(Math.random()*data.length));//5
//         console.log(j);
//         text+=j;
//     }
//     return text;
// }
// function randomString(){
//   let rs = "";
//   for(let i = 0; i < 32; i++){
//     rs+= String.fromCharCode(Math.)
//   }
//   return rs;
// }
// #### 10. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode.

// ```js
// // Ví dụ
// toNextChar(“ad”); // “be”

// function toNextChar(text) {
//   return text
//     .split("")
//     .map(function (char) {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     })
//     .join("");
// }
// console.log(toNextChar("okah"));

// #### 1. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.

// ```js
// // Ví dụ
// dayOfWeek(date); // "T2"
// ```

// #### 2. Viết hàm trả về ngày trước ngày hiện tại n ngày
//function getDateBefore(date, n) {
// return date.setDate(date.getDate() - n);
//}


// ```js
// // Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"
// ```

// #### 3. Viết hàm trả về số ngày trong tháng bất kỳ

// ```js
// // Ví dụ
// daysOfMonth(year, month); // 31
// ```

// #### 4. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau

// ```js
// // Ví dụ
// daysToNewYear(); // 123
// ```

// #### 5. Viết hàm kiểm tra một ngày có phải cuối tuần hay không

// ```js
// // Ví dụ
// isWeekend(date); // true
// ```

// #### 6. Viết hàm tính tổng số ngày đã qua trong năm

// ```js
// // Ví dụ
// daysPassed(); // 123
// ```

// #### 7. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng “10:01:30 CN 20/01/2020”

// #### 8. Viết hàm trả về số giờ chênh lệnh giữa 2 ngày

// ```js
// // Ví dụ
// hoursDiff(date1, date2); // 123
// ```

// #### 9. Viết hàm trả về ngày đầu tuần (T2) tương ứng với thời gian truyền vào

// ```js
// // Ví dụ
// monday(date); // "2020-02-12"
// ```

// let fruit = ["orange", "apple", "strawberry"];

// fruit[0] = "mango";
// console.log(fruit[0]);
// console.log(fruit.length);
// fruit.splice(2, 3); //xoa
// fruit.splice(2, null, "a", "b"); //them
//sort sap xep theo chuoi
// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

// let a = [1, 4, 5, 6, 7, 9];
// a.filter(function (i) {
//     return i > 5;
// });
// console.log(a);
// a.sort(function sortArr(a, b) {
//   return a - b;
// });

// console.log(a.sort(sortArr));
// for(let i of fruit){
//     console.log(i);
// }
// fruit.forEach(myFunction);
// function myFunction(value){
//     console.log(value);
// }

// let newArr = [];
// //  for(let i = 0; i < a.length; i++){
// //      a[i] = a[i] * 10;
// //  }
//  for(let i of a){
//     newArr.push(i * 10);
// }
//map
// let arr = [0, 5, 10, 15];
// let arr1 = arr.map(function(i){
//     return i * 10;
// });
// console.log(arr1);

// arr.reduce(function(sum, i){
//     return sum+=i;
// }, 0)
// fruit.push("Lemon");// Thêm phần tử vào cuối mảng

// let arr = ["ba", 0, {name: "beo", age: 28}];
// arr[2].name//beo

// 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

// ```js
// // Ví dụ
// avg([1, 2, 3]); // 2.0
// ```
// function avg(arr){
//     let count = 0, sum = 0;
//     for(let i of arr){
//         count ++;
//         sum +=i;
//     }
//     return sum/count;
// }

//2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng

// ```js
// // Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}
//function maxOfArr(arr) {
//let max = arr[0];
// for(let i of arr){
//     if(arr[i] > max){
//         maxIndex = i;
//         max = arr[i];
//     }
// }
//   arr.some(function (elm) {
//     if (elm > max) {
//       max = elm;
//     }
//   });
//console.log("index : " + " ,value: " + max);
//}
//maxOfArr([1, 2, 3, 3.5]);

// 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng

// ```js
// // Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3

// function secondValue(arr){
//     let max = arr[0], max2 = -Infinity;
//     for(let i of arr){
//         if(arr[i] > max){
//             maxIndex = i;
//             max = arr[i];
//         }
//     }
//     for(let i of arr){
//         if(i == max){
//             continue;
//         }
//         else if(i > max2){
//             max2 = i;
//         }
//     }
//     return max2;
// }
// console.log(secondValue([1, 3, 2, 4, 0, 4]));
//4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.

// ```js
// // Ví dụ
// cap("hello world"); // "Hello World"
// ```
// function cap(inpString){
//     let arr = inpString.split(" ");
//     for(let i in arr){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// function cap(text) {
//   return text
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
//5. Viết hàm tìm số phần tử xuất hiện nhiều lần nhất trong mảng

// ```js
// // Ví dụ
// most([1, 2, 3]); // 2.0
// ```
// function most(arr){
//     if(arr.length == 0)
//     return null;
//     let count = {};
//     let maxEl = arr[0], maxCount = 1;
//     for(let i = 0 ; i < arr.length; i++){
//         let el = arr[i];
//         if(count[el] == null)
//             count[el] = 1;
//         else
//             count[el]++;
//         if(count[el] > maxCount)
//         {
//             maxEl = el;
//             maxCount = count[el];
//         }
//     }

//     return maxEl;
// }
// console.log(most([1,3,2,2,5]));
// #### 6. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định.

// ```js
// // Ví dụ
// slide("Hello", 2); // ["He", "ll", "o"]
// ```
// function slide(arr, long){
//   let index = 0;
//   let arrRl = [];
//   while (index != arr.length()) {
//     arrRl.push(arr.slice(index, index + 2));
//     index+=2;
//   }
//   return arrRl;
// }
// console.log(slide("Hello", 2));
// #### 7. Viết hàm tách chuỗi thành một mảng các chuỗi con

// ```js
// // Ví dụ
// breakWord("dog"); // ["d", "do", "dog", "og", "g"]
// ```
// function breakWord(str){
//     let i = 1;
//     let rs = [];
//     for(let i = 0; i <= str.length; i++){
//         for(let j = i + 1; j <= str.length; j++){
//             let slice = str.slice(i, j);
//             rs.push(slice);
//         }
//     }
//     return rs;
// }
// console.log(breakWord("dog"));
// #### 8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// function removeFalsy(arr){
//     return arr.filter(Boolean);
// }
// console.log(removeFalsy([null, "", 0, false, 1]));
// // ```

// #### 9. Viết hàm lấy một phần tử ngẫu nhiên trong mảng

// ```js
// // Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]
// ```
// function removeFalsy(arr){
//     return arr[Math.floor(Math.random()*arr.length)];
// }
// console.log(removeFalsy([null, "", 0, false, 1]));
// #### 10. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)

// ```js
// // Ví dụ
// shuffle([1, 2, 3, 4]); // [1, 3, 4, 2]
//
// function shuffle(arr){
//   for(let i = 0; i < arr.length - 1; i++){
//     let randomIndex = Math.floor(Math.random() * (arr.length - i - 1 )) + i + 1;
//     let temp = arr[i];
//     arr[i] = arr[randomIndex];
//     arr[randomIndex] == temp;
//   }
//   return arr;
// }
// console.log(shuffle([1, 2, 3, 4]));

