//Bài 1: Tính tổng từ 0 -> 100
// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log("Tổng các số 0 - 100 là: " + sum);
let sum = ()=>{
    let tong = 0;
    for(let i =0; i<=100; i++){
    tong+=i;
    }
    console.log(tong);
}
sum();

//Bài 2: Tính tổng số lẻ từ 0 -> 100
// let sum = 0;
// for (let i = 1; i <= 100; i+=2){
//     sum+=i;
// }
// console.log("Tổng các số  lẻ từ 0 - 100 là: " + sum);

//Bài 3: Tính tổng số lẻ chia hết cho 3 từ 0 -> 100
// let sum = 0;
// for (let i = 1; i <= 100; i+=2){
//     if(i % 3 == 0){
//         sum += i;
//     }
// }
// console.log("Tổng các số  lẻ chia hết cho 3 từ 0 - 100 là: " + sum);

// Bài 4: Tính tổng số  chia het cho 3, 5 ,7 từ 0 -> 100
// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     if(i % 105 == 0){
//         sum += i;
//     }
// }
// console.log("Tổng các số chia hết cho cho 3, 5 ,7 từ 0 - 100 là: " + sum);

// Bài 5: Tính tổng số  chia het cho 3 hoặc 5 hoặc 7 từ 0 -> 100
// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
//         sum += i;
//     }
// }
// console.log("Tổng các số chia hết cho cho 3 hoặc 5 hoặc 7 từ 0 - 100 là: " + sum);

// Bài 6: In ra bảng cửu chương tù 1 đến 10
    // for (let i = 1; i <= 10; i++){
    //     let s = "";
    //     for(let j = 1; j <= 10; j ++){
    //         // console.log(i + " x " + j + " = " + i*j);
    //         s += i * j + " "; 
    //     }
    //     console.log(s);
    // }

// Bài 7: Viêt chương trình nhập số lượng tùy ý dừng nhập neu input là null hoặc "". 
//In ra số lớn  nhất và nhỏ nhất trong các số đã nhập
// let max;
// let min;

// for(let i = 0; ;i++){
//     let x = prompt("Mời bạn nhập số");

//     if(x == null || x == ""){
//         break;
//     }

//     if(i == 0){
//         max = x; 
//         min = x;
//     }

//     if(Number(x) > max){
//         max = x;
//     }

//     if(Number(x) < min){
//          min = x;
//     }
// }
// console.log("max = " + max);
// console.log("min = " + min);

// Bài 8: Tìm số nguyên tố

// let isTrue = true;
// function isPrime(n){
//     if(n < 2){
//         isTrue = false;
//     }else{
//         for(let i = 2 ; i <= Math.sqrt(n); i++){
//             if(n % i == 0){
//                 isTrue = false;
//             }
//         }
//     }
//     if(isTrue){
//         console.log(n + " là số nguyên tố");
//     }
//     else{
//         console.log(n + " không là số nguyên tố");
//     }
// }
// let n = Number(prompt("Nhập một số:"));
// isPrime(n);


// let a = Number(prompt("Nhap vao 1 so : "));
// function count(n){
//     let dem = 0;
//     for(;n!=0;){
//         n = (n - n % 10)/10;
//         ++dem;
//     }
//     return dem;
// }

// function pow(cs , sm){
//     let result = 1;
//     for(i = 0; i<sm; i++){
//         result*=cs;
//     }
//     return result;
// }
// function isStrong(n){
//     let last, sum = 0, sm = count(n);
//     console.log("sm"+sm);
//     for(;n!=0;){
//         last = n % 10;
//         console.log("last"+last);
//         n = (n - last)/10;
//         console.log("n"+n);
//         sum+= pow(last,sm);
//         console.log(sum);
//     }
//     if(sum==n){
//         console.log("yes");
//     }else{
//         console.log("no");
//     }
// }
// isStrong(a);


