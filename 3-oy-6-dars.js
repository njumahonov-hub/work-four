// 1-masala

// Array.prototype.myMethkv = function () {
//   let res = [];
//   for (const element of this) {
//     res.push(element ** 2);
//   }
//   return res;
// };

// let arr = [12, 4, 6];

// console.log(arr.myMethkv());

// 2-masala

// String.prototype.myReverse = function () {
//   let res = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     res += this[i];
//   }
//   return res;
// };

// let str = "javascript";

// console.log(str.myReverse());

// 3-masala
////Agar  My shop do'konidan haridingiz 100$ ga yetsa 50 % chegirma

// function MyShop(buyersname, purchaseAmount) {
//   this.buyersname = buyersname;
//   this.purchaseAmount = purchaseAmount;
// }

// MyShop.prototype.myShop = function () {
//   if (this.purchaseAmount >= 100) {
//     return this.purchaseAmount / 2;
//   }
// };

// let shopping = new MyShop("john", 150);

// console.log(shopping.myShop());

// 4-masala

// function MyShop(buyersname, purchaseAmount) {
//   this.buyersname = buyersname;
//   this.purchaseAmount = purchaseAmount;
// }

// MyShop.prototype.myShop = function () {
//   if (this.purchaseAmount >= 100) {
//     return this.purchaseAmount / 2;
//   }
// };

// let shopping = new MyShop("john", 150);
// let shopping1= new MyShop("Rustam", 120)
// let shopping2= new MyShop("Sarvar",100)
// let shopping3= new MyShop("Jahongir",200)

// console.log(shopping.buyersname+"ning sikkidkadagi xardid summasi " +shopping.myShop()+"$");
// console.log(shopping1.buyersname+"ning sikkidkadagi xardid summasi " +shopping1.myShop()+"$")
// console.log(shopping2.buyersname+"ning sikkidkadagi xardid summasi " +shopping2.myShop()+"$")
// console.log(shopping3.buyersname+"ning sikkidkadagi xardid summasi " +shopping3.myShop()+"$")

// 5-masala

// Array.prototype.myConcat = function (...a) {
//   let res = [...this];
//   for (const element of a) {
//     if (Array.isArray(element)) {
//       res.push(...element);
//     } else {
//       res.push(element);
//     }
//   }
//   return res;
// };

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];

// let newarr = arr.myConcat(arr2);

// console.log(newarr);

// 6-masala

// function Object(name,age) {
//     this.name=name
//     this.age=age
// }

// Object.prototype.Keys= function(){
// let res=[]
// for (const key in this) {
//    if(this.hasOwnProperty(key)){
//      res.push(key)
//    }
//     }
// return res
// }
// let obj= new Object("John",21)

// console.log(obj.Keys());

// 7-masala

// Object.prototype.myHello = function () {
//   return (
//     "Salom mening ismim " + this.stdName + ", yoshim " + this.stdAge + " da"
//   );
// };

// let obj = {
//   stdName: "Rustam",
//   stdAge: 24,
// };
// console.log(obj.myHello());
// delete Object.prototype.myHello
// console.log(obj.myHello());

// 8-masala

// String.prototype.myVowels = function () {
//   let vowels = "aeuio";
//   let newstr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (vowels.includes(this[i])) {
//       newstr.push(this[i]);
//     }
//   }
//   return newstr;
// };

// let str = "apple";
// console.log(str.myVowels());

// 9-masala

// Array.prototype.myMeth = function () {
//   let res = "";
//   let ult = "";
//   for (const element of this) {
//     if (!isNaN(element) && element !== " ") {
//       res += element + " ,";
//     } else if (isNaN(element) && element !== " ") {
//       ult += element + " ,";
//     }
//   }
//   return (result = {
//     nums: res,
//     words: ult,
//   });
// };

// let arr = ["salom", 12, 14, "abs", 15, "world"];

// console.log(arr.myMeth());

// 10-masala

// Object.prototype.objConcat = function (a) {
//   return Object.assign({}, this, a);
// };

// let obj = {
//   name: "nodir",
// };
// let obj2 = {
//   age: 21,
// };

// console.log(obj.objConcat(obj2));

// 11-masala

// class MyMath {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   kv() {
//     return this.arr.map((n) => n ** 2);
//   }
// }

// let arr = new MyMath([2, 3, 4]);
// let arr1 = new MyMath([5, 6, 7]);
// console.log(arr1.kv());

// 12-masala

// class Mystring {
//   constructor(str) {
//     this.str = str;
//   }
//   myReverse() {
//     let res = "";
//     for (let i = this.str.length - 1; i >= 0; i--) {
//       res += this.str[i];
//     }
//     return res;
//   }
// }

// let str = new Mystring("javascript");
// console.log(str.myReverse());

// 13-masala

// class Myshop {
//   constructor(buyersname, purchaseAmount) {
//     this.buyersname = buyersname;
//     this.purchaseAmount = purchaseAmount;
//   }
//   sum() {
//     if (this.purchaseAmount >= 100) {
//       return this.purchaseAmount / 2;
//     }
//   }
// }
// let obj = new Myshop("John", 100);

// console.log(obj.sum());

// 14-masala

// class Myshop {
//   constructor(buyersname, purchaseAmount) {
//     this.buyersname = buyersname;
//     this.purchaseAmount = purchaseAmount;
//   }
//   sum() {
//     if (this.purchaseAmount >= 100) {
//       return this.purchaseAmount / 2;
//     }
//   }
// }
// let obj = new Myshop("John", 100);
// let obj2=new Myshop("Qodir", 250);
// let obj3=new Myshop("Rustam",150);
// console.log(obj2.sum());

// 15-masala
// class Myarray {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   myConcat(...args) {
//     let res = [...this.arr];
//     for (const element of args) {
//       if (element instanceof Myarray) {
//         res.push(...element.arr);
//       } else if (Array.isArray(element)) {
//         res.push(...element);
//       } else {
//         res.push(element);
//       }
//     }
//     return res;
//   }
// }

// let arr1 = new Myarray([1, 2, 3, 4]);
// let arr2 = new Myarray([5, 6, 7]);

// console.log(arr1.myConcat(arr2));

// 16-masala

// class Object {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Keys() {
//     let res = [];
//     for (const key in this) {
//       if (this.hasOwnProperty(key)) {
//         res.push(key);
//       }
//     }
//     return res;
//   }
// }

// let obj = new Object("John", 24);

// console.log(obj.Keys());

// 17-masala

// class Object {
//   constructor(stdName, stdAge) {
//     this.stdName = stdName;
//     this.stdAge = stdAge;
//   }

//   myHello() {
//     return (
//       "Salom mening ismim " + this.stdName + ", yoshim " + this.stdAge + " da"
//     );
//   }
// }
// let obj = new Object("Rustam", 24);

// console.log(obj.myHello());

// 18-masala

// class MyString {
//   constructor(str) {
//     this.str = str;
//   }

//   myVowels() {
//     let vowels = "aeuio";
//     let newstr = [];
//     for (let i = 0; i < this.str.length; i++) {
//       if (vowels.includes(this.str[i])) {
//         newstr.push(this.str[i]);
//       }
//     }
//     return newstr;
//   }
// }

// let str = new MyString("apple");
// console.log(str.myVowels());

