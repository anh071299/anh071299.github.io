//bat dau bai 1 : Đổi cm ra mm m km
let cm = Number(prompt("Nhập giá trị đơn vị độ dài ở cm"));
console.log(cm + " cm = " + cm/100 + " m"+ "\n" + cm + " cm = " + cm*10 + " mm" + "\n" + cm + " cm = " + cm/100000 + " km");

//bat dau  bai 2: Đổi độ C ra độ F và độ K
let c = Number(prompt("Nhập vào một giá trị ở đơn vị Celsius"));
let f = c * 1.8 + 32;
let k = c + 273;
console.log(c + " độ C = " + f + " độ F = " + k + " độ K");

//bat dau bai 3: Đổi giây ra giờ, phút, giây
let s = Number(prompt("Nhập vào số giây"));
let gio = ((s - s % 3600)/3600);
let phut = ((s - gio * 3600 - (s - gio * 3600) % 60)/60);
let giay = (s - gio * 3600 - phut * 60);
console.log(s + " = " + gio +  " : " + phut + " : " + giay);

//bat dau bai 4



