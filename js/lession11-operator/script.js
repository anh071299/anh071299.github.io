
// let myComputer = {
//     type: "Laptop",
//     brand: "Dell", 
//     "operating system" : "Window 10",
//     start : function(){
//         console.log("Startup");
//     },
// };
// myComputer.cpu = "i7-4800";
// console.log(myComputer.cpu);
// myComputer.brand = "Asus";
// delete myComputer.type;
// console.log(myComputer.brand);
// // myComputer.start();
// // myComputer["start"]();
// let otherComputer = {};
// otherComputer = Object.assign(otherComputer, myComputer);
// let salaries = {
//     anna: 1000,
//     john: 1200,
//     phoebe: 2000,
//     brian: 1500,
//     diana: 1100,
// };

// let salaries = {};
// function input(obj){
//     for(;;){
//         let name = prompt("Nhap ten nhan vien");
//         let salary = prompt("Nhap luong nhan vien " + name);
//         if(name == null || name =="" || salary == null || salary == ""){
//             break;
//         }
//         else{
//             obj[name] = Number(salary);
//         }
//     }
// }
// input(salaries);

// function edit(obj){
//     for(;;){
//         let name = prompt("Nhap ten nhan vien");
//         let salary = prompt("Nhap luong nhan vien " + name);
//         if(name == null || name =="" || salary == null || salary == ""){
//             break;
//         }else if(name in obj){
//             obj[name] = Number(salary);
//         }else{
//             console.log('Không có nhân viên' + name);
//         }
//     }
// }
// edit(salaries);

// function total(obj){
//     let sum = 0;
//     for(let i in salaries){
//         sum += obj[i];
//     }
//     return sum;
// }
// console.log(total(salaries));
// function minmax(obj){
    
//     for(let i in salaries){

//     }
// }
// C1
// function remove(obj, key){
//     let objn = {};
//     for(let i in obj){
//         if(i != key){
//             objn[i]= obj[i];
//         }
//     }
//     return objn;
// }
// let demo ={a:1, b:2};
// console.log(remove(demo, 'b'));
// C2
// function remove(obj, key){
//     let copy = Object.assign({}, obj);
//     delete copy[key];
//     return copy;
// }
//
// function isEqual(obj1, obj2){
//     for(let k in obj1){
//         if(!(k in obj2) || obj1[k] != obj2[k]){
//             return false;
//         }
//     }
//     for(let k in obj2){
//         if(!(k in obj1) || obj1[k] != obj2[k]){
//             return false;
//         }
//     }
//     return true;
// }
// let a = {x:1, y:2};
// let b = {x:1, y:2};
// console.log(isEqual(a,b));
//
// function intersection(obj1, obj2){
//     let objc = {};
//     for(let k in obj1){
//         if(k in obj2 || obj1[k] == obj2[k]){
//             objc[k] = obj1[k];
//         }
//     }
//     return objc;
// }
// let a = {x:1, y:2};
// let b = {x:1, z:2, y:2};
// console.log(intersection(a,b));