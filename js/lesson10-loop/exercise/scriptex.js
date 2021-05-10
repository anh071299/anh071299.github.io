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
// function sumFibo(n){
//     let sum = 1;
//     let f0 = 0,
//         f1 = 1,
//         fn = 1;
//         if (n <= 0) {
//             return 0;
//         } else {
//             for (i = 2; i <= n; i++) {
//                 f0 = f1;
//                 f1 = fn;
//                 sum+=f0+f1;
//             }
//         }
//         return sum;
// }
// let a = Number(prompt(("Nhap so a")));
// console.log(sumFibo(a));

//Viết hàm isArmstrong(n) kiểm tra n có phải số Armstrong, kết quả trả về true hoặc false
// function countDigits(n){
//     let count = 0;
//     for(;n!=0;){
//         n = (n - n % 10)/ 10;
//         count ++;
//     }
//     return count;
// }

// function pow(x , n){
//     let pow = 1;
//     for(i = 0; i < n; i++){
//         pow *=x;
//     }
//     return pow;
// }

// function isArmstrong(n){
//     let digitAmount = countDigits(n)
//         ,sum = 0
//         ,lastDigit, 
//         temp = n;
//     for(; temp!=0; ){
//         lastDigit = temp % 10;
//         temp = (temp - lastDigit) / 10;
//         sum += pow(lastDigit,digitAmount);
//     }
//     if(n == sum){
//         return true;
//     }else{
//         return false;
//     }
// }

// let n = Number(prompt('Nhap so n'));
// if(isArmstrong(n)){
//     console.log("Là số armstrong")
// }else{
//     console.log("Không là số armstrong");
// }

//Viết hàm isPerfetc(n) kiểm tra n có phải số Perfect, kết quả trả về true hoặc false
// function isPerfect(n){
//     let sum = 0;
//     for(i = 1; i <= n/2; i++){
//         if(n % i == 0){
//             sum+=i;
//         }
//     }
//     if(sum == n){
//         return true;
//     }else{
//         return false;
//     }
// }
//     let n = Number(prompt('Nhap so n'));
//     if(isPerfect(n)){
//         console.log("Là số hoàn hảo")
//     }else{
//         console.log("Không là số hoàn hảo");
//     }

// Viết hàm isPalindrome(n) kiểm tra n có phải số Palindrome, kết quả trả về true hoặc false
// function isPalindrome(n){
//     let sum = 0, temp = n, r;
//     for(;temp!=0;){
//         r = temp % 10;
//         sum = sum * 10 + r;
//         temp = (temp - r) / 10;
//     }
//     if(sum == n){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
//     let n = Number(prompt('Nhap so n'));
//     if(isPalindrome(n)){
//         console.log("Là số đảo ngược")
//     }else{
//         console.log("Không là số đảo ngược");
//     }

// Viết hàm factorial(n) tính và trả về giai thừa của n
// function factorial(n){
//     let factorial = 1;
//     if(n <= 2) return n;
//     else{
//         for(i = 1; i <= n; i ++){
//             factorial *= i;
//         }
//     }
//     return factorial;
// }
// let n = Number(prompt('Nhap so n'));
// console.log(factorial(n));

//Viết hàm isExpo(a, b) kiểm tra số a có phải lũy thừa của b hay không, kết quả trả về true hoặc false
// function isExpo(a, b){
//     let r;
//     let pow = 1;
//     if(a == b) return false;
//     else if(b == 1|| b == 0 || b == -1){
//         return false;
//     }else{
//         for(;pow < a;){
//             pow *=b;
//         }
//         if(pow == a) return true;
//         else return false;
//     }
// }
// let a = Number(prompt("Nhap so a"));
// let b = Number(prompt("Nhap so b"));
// if(isExpo(a,b)){
//     console.log("ok");
// }else{
//     console.log("false");
// }

//Viết hàm subByMultiAndSum(n) tính và trả về kết quả biểu thức hiệu giữa tích và tổng của các chữ số trong số n.
// function subByMultiAndSum(n){
//     let sum = 0, multi = 1;
//     for(;n!=0;){
//         r = n % 10;
//         sum += r;
//         multi *= r;
//         n = (n - r)/ 10;
//     }
//     return multi - sum;
// }
// let a = Number(prompt("Nhap so a"));
// console.log(subByMultiAndSum(a));
// Viết hàm expo(x, y) tính và trả về kết lũy thừa bậc y của x, (y có thể âm)
    // function pow(x , y){
    //     let pow = 1, sm = y;
    //     if(y < 0){
    //         sm = -y;
    //     }
    //     for(i = 0; i < sm; i++){
    //         pow *=x;
    //     }
    //     if(y < 0){
    //         return 1/pow;
    //     }else{
    //         return pow;
    //     }
    // }
    // let a = Number(prompt("Nhap so a"));
    // let b = Number(prompt("Nhap so b"));
    // console.log(pow(a,b));

    // In ra chu so dau tien va so cuoi cung cua mot so
    // function find(n){
    //     let last = n % 10, r ;
    //     for(;n!=0;){
    //         r = n % 10;
    //         n = (n - r)/ 10;
    //     }
    //     console.log(r*10 + last);
    // }
    // let a = Number(prompt("Nhap so a"));
    // find(a);