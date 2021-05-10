// let students = {
//     name: "Ba",
//     get age(){
//         return 29
//     },
//     set age(value){
//         if(15 < value && value < 25){
//             this._age = value;
//         }
//         else(console.log("Tuoi khong hop le"))
//     }
// };
// // function khoi tao chu cai dau tien nen viet hoa
// function Student(name, age, gender, address, phone){
//     // let obj ={};
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.address = address;
//     this.phone = phone;
//     this.hi = function (){
//         console.log("Hello. I'm " + this.name);
//     };
//     this.toString = function(){
//         return "Object : " + this.name;
//     }
//     // Cần kiểu dl number ưu tieen obj goi valueOf> toString
//     this.valueOf = function(){
//         return this.age;
//     }
//     // return obj;
// }
// let anh = new Student("Anh", 22, "nữ", "Thái Bình", "09877xxxxx");// Khi sử dụng từ khóa new thi trong hàm khởi tạo
// // không cần khởi tạo một đôi tượng mới và return
// anh.hi();

//Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon
// function Weapon(name, type, damage, speed) {
//   this.name = name;
//   this.type = type;
//   this.damage = damage;
//   this.speed = speed;

//   this.toString = function () {
//     return this.type + this.name;
//   };

//   this.valueOf = function () {
//     return this.damage * this.speed;
//   };
// }
// let sungThoSan = new Weapon("Thợ săn", "súng", 1000, 1.5);

// function Character(name, level, weapon) {
//   this.name = name;
//   this.level = level;
//   this.weapon = weapon;

//   this.attack = function () {
//     console.log("Độ sát thương là:" + this.weapon.valueOf());
//   };
//   this.changeWeapon = function (newWeapon) {
//     this.weapon = newWeapon;
//   };
// }
// let lv18 = new Character("ok", 2, sungThoSan);

//Viết hàm khởi tạo Calculator(), có các phương thức:
// get(a, b) nhận vào 2 số a, b lưu vào 2 prop a, b tương ứng
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng

// Làm thế nào để cho phép gọi hàm theo chuỗi
// VD cal.get(4,5).add(); // 9

// function Calculator(){
//     this.get = function(a, b){
//         this.a = a;
//         this.b = b;
//         return this;
//     }

//     this.add = function(){
//         return this.a + this.b;
//     }

//     this.sub = function(){
//         return this.a - this.b;
//     }

//     this.div = function(){
//         return this.a / this.b;
//     }

//     this.mul = function(){
//         return this.a * this.b;
//     }

//     this.rem = function(){
//         return this.a % this.b;
//     }

//     this.exp = function(){
//         return Math.pow(this.a, this.b);
//     }

// }
// let cal = new Calculator();
// console.log(cal.get(4,5).add());

//Viết hàm tạo Counter(count), count mặc định = 0, và các phương thức
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại

// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();
// function Counter(count){
//     this.count = count || 0;
//     this.up = function(){
//         this.count++;
//         return this;
//     }

//     this.down = function(){
//         this.down --;
//         return this;
//     }
//     this.get = function(){
//         console.log("Current" + this.count);
//         return this;
//     }

// }
// let test = Counter(3);
// console.log(test.up().up().get().down().get());

//
function Rectangle(wide, long, unit) {
  return{
    _wide: wide,
    _long: long,
    _unit: unit,

    get unit(){
      return this._unit;
    },
    set unit(newValue){
      if(newValue == "m" || newValue == "km"){
        this._unit = newValue;
      }
    },
    get wide(){
      return this._wide;
    },
    set wide(newValue){
      if(newValue > 0){
        this._wide = newValue;
      }
    },
    get long(){
      return this._wide;
    },
    set long(newValue){
      if(newValue > 0){
        this._long = newValue;
      }
    },
    toString(){
      return("Hình chữ nhật, " + this._wide + " " + this.unit + " " + this.long + " " + this.unit );
    }, 
    valueOf(){
      return this._wide * this._long;
    }
  }
}
// let test = new Rectangle(2, 3, "km");
// test.setter();
// test.string();
