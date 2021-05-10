// // Toán tử logic
// //bat dau bai 1 : Đổi cm ra mm m km
// let cm = Number(prompt("Nhập giá trị đơn vị độ dài ở cm"));
// console.log(cm + " cm = " + cm/100 + " m"+ "\n" + cm + " cm = " + cm*10 + " mm" + "\n" + cm + " cm = " + cm/100000 + " km");

// //bat dau  bai 2: Đổi độ C ra độ F và độ K
// let c = Number(prompt("Nhập vào một giá trị ở đơn vị Celsius"));
// let f = c * 1.8 + 32;
// let k = c + 273;
// console.log(c + " độ C = " + f + " độ F = " + k + " độ K");

// //bat dau bai 3: Đổi giây ra giờ, phút, giây
// let s = Number(prompt("Nhập vào số giây"));
// let gio = ((s - s % 3600)/3600);
// let phut = ((s - gio * 3600 - (s - gio * 3600) % 60)/60);
// let giay = (s - gio * 3600 - phut * 60);
// console.log(s + " = " + gio +  " : " + phut + " : " + giay);

// //bat dau bai 4: Tính nghiệm phương trình ax + b 
// let a = Number(prompt("Nhap he so a:"));
// let b = Number(prompt("Nhap he so b:"));
// (a != 0) && console.log("Nghiem cua phương trinh la:" + -b/a);
// (a == 0 && b == 0) && console.log("Phuong trinh luon dung");
// (a == 0 && b != 0) && console.log("Phuong trinh vo nghiem");

// Bắt đầu bài 5: Tìm số lớn nhất trong 3 số a, b, c
// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// let c = Number(prompt("Nhập số c:"));
// let max = a;
// b >= max && (max = b);
// c >= max && (max = c);
// console.log("Số lớn nhất là " + max);

// // Bắt đầu bài 6: Kiểm tra tam giác hợp lệ
// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// let c = Number(prompt("Nhập số c:"));
// (a + b > c && b + c > a && a + c > b) && console.log("Ba số đó tạo thành tam giác hợp lệ");
// (a + b <= c || b + c <= a || a + c <= b) && console.log("Ba số đó không tạo thành tam giác hợp lệ");

// //IF-ELSE
// // Bài 1: Kiem tra so lon nhat trong ba so a, b ,c 
// let a = Number(prompt("Nhap so a:"));
// let b = Number(prompt("Nhap so b:"));
// let c = Number(prompt("Nhap so c:"));
// let max = a;
// if(b > max){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//     max = b;
// }
// if(c > max){
//     max = c;
// }
// console.log("Số lớn nhất trong ba số " + a + ", " + b + ", " + c + " là " + max);

// bài 2: Kiểm tra năm nhuận
//  let year = Number(prompt('Nhap nam:'));
//  if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//      console.log("Năm nhuận");
//  }
//  else console.log("Không phải năm nhuận");

//bài 3: Kiểm tra nguyên âm phụ âm
// let x = prompt("Mời bạn nhập ký tự");
// if(('a' <= x && x <= 'z') || ('A' <= x && x <= 'Z')){
//     if( x == 'a' || x == 'u' || x == 'e' || x == 'o' || x == 'i' || x == 'A' || x == 'U' || x == 'E' || x == 'O' || x == 'I'){
//         console.log("Nguyên âm");
//     }else{
//            console.log("Phụ âm");
//     }
// }

// //bài 4: Kiểm tra chữ hoa, chữ thường
// // let x = prompt("Mời bạn nhập ký tự");
// // if('a' <= x && x <= 'z'){
// //     console.log("Chu thuong");
// // }else if('A' <= x && x <= 'Z'){
// //     console.log("Chu hoa");
// // }else{
// //     console.log("Ký tự bạn nhập không phải chữ cái")
// // }

// bài 5: Tìm nghiệm của phương trình ax^2 + bx + c
// let a = Number(prompt("Mời bạn nhập hệ số a:"));
// let b = Number(prompt("Mời bạn nhập hệ số b:"));
// let c = Number(prompt("Mời bạn nhập hệ số c:"));
// let denta = b*b - 4*a*c;
// if(denta == 0){
//     console.log("Phương trình có nghiệm kép: x1 = x2 = " + -b / (2 * a));
// }else if(denta < 0){
//     console.log("Phương trình vô nghiệm");
// }else{
//      console.log("Phương trình có 2 nghiệm phân biệt x1 = " + (-b + Math.sqrt(denta)) / (2*a) + " ;x2 = " + (-b - Math.sqrt(denta)) / (2*a));
//  }
    

// //bài 6:uy đổi thang điêm chữ
// let point = Number(prompt("Nhập số điểm:"));
// if(point < 0 && point > 10){
//     console.log("Bạn nhập điểm không hợp lệ");
// }else if( point < 4){
//     console.log("Bạn được điểm F");
// }else if(point < 5.5){
//     console.log("Bạn được điểm D");
// }else if(point < 7){
//     console.log("Bạn được điểm C");
// }else if(point < 8.5){
//     console.log("Bạn được điểm B");
// }else if(point <= 10){
//     console.log("Bạn được điểm A");
// }