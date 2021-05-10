// //Bài 1: In ra bảng cửu chương tù 1 đến 10
// // for (let i = 1; i <= 10; i++){
// //     let s = "";
// //     for(let j = 1; j <= 10; j ++){
// //         console.log(i + " x " + j + " = " + i*j);
// //     }
// // }

// //Bài 2: VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5
// //thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50
// for(let i = 0; i <= 50; i++){
//     if(i % 3 != 0 && i % 5 != 0){
//         console.log(i + " là BizzFuzz");
//     }else if(i % 3 == 0 && i % 5 == 0){
//         console.log(i + " là FizzBuzz");
//     }else if(i % 3 == 0){
//         console.log(i + " là Fizz");
//     }else if(i % 5 == 0){
//         console.log(i + " là Buzz");
//     }
// }
// //VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100
// let sum = 0;
// for(int i = 0 ; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         sum+=i;
//     }
// }
// console.log("tổng bội chung của 3 và 5 trong khoảng 0 -> 100 = " + sum);

// //VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả
// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2 ; i <= Math.sqrt(n); i++){
//         if(n % i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// let n = Number(prompt("Nhập một số:"));
// if(isPrime(n)){
//     console.log(n + " là số nguyên tố");
// }
// else{
//     console.log(n + " không là số nguyên tố");
// }

// //VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b
// function isPrime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2 ; i <= Math.sqrt(n); i++){
//         if(n % i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// let a = Number(prompt("Nhap so a"));
// let b = Number(prompt("Nhap so b"));
// let sum = 0;
// for(let i = a; i <= b; i++){
//     if(isPrime(i)){
//         sum+= i;
//     }
// }
// console.log(sum);

// Viết hàm cube(n) tính và trả về giá trị lập phương của một số n
// function cube(n){
// return n * n * n;
// }
// Viết hàm sumFibo(n) tính và trả về tổng dãy số Fibonacci từ 0 -> n
function sumFibo(n){
    let sum = 1;
    let f0 = 0,
        f1 = 1,
        fn = 1;

    if(n == 0 || n == 1) return n;
    else{
        for(i = 2; i<=n; i++){
            f0 = f1;
            f1 = fn;
            sum += f0 + f1;
        }
    }
}
let a = Number(prompt(("Nhap so a")));
console.log(sumFibo(a));