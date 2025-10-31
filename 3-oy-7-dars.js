// amaliy
// 5-masala

// class Course {
//   constructor(coursname, courscode, students = []) {
//     this.coursname = coursname;
//     this.courscode = courscode;
//     this.students = students;
//   }

//   addStudent(newUser) {
//     this.students.push(newUser);
//     return {
//       coursname: this.coursname,
//       courscode: this.courscode,
//       students: this.students,
//     };
//   }
//   removeStudent(oldUser) {
//     const index = this.students.indexOf(oldUser);
//     if (index !== -1) {
//       this.students.splice(index, 1);

//       return {
//         coursname: this.coursname,
//         courscode: this.courscode,
//         students: this.students,
//       };
//     }
//   }
// }

// let newCourse = new Course("Backend", "xn_8", [
//   "nodir",
//   "qodirjon",
//   "farrux",
//   "ruslon",
// ]);
// newCourse.addStudent("jasur");
// newCourse.removeStudent("ruslon");
// console.log(newCourse);

// 6-masala

// class Wallet {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   addfunds(funds) {
//     this.balance += funds;
//     return {
//       balance: this.balance,
//     };
//   }
//   spendfunds(funds) {
//     if (this.balance < funds) {
//       return "mablag'ingiz yetarli emas!";
//     } else {
//       return this.balance - funds;
//     }
//   }
// }

// let digitalWallet = new Wallet(2000);
// digitalWallet.addfunds(500);
// console.log(digitalWallet.spendfunds(2501));

// 7-masala

// class Notifications {
//   constructor(message, date) {
//     this.message = message;
//     this.date = date;
//   }

//   sendNotfication(newmes) {
//     this.message = newmes;
//     return {
//       message: this.message,
//       date: this.date,
//     };
//   }
//   clearNotfication() {
//     this.message = "";
//     return {
//       message: "xabaringiz o'chirildi",
//       date: this.date,
//     };
//   }
// }

// let dateNow = new Date();
// let newNotification = new Notifications("salom", dateNow.toTimeString());
// newNotification.sendNotfication("assalomu aleykum");
// console.log(newNotification.clearNotfication());

// homeworks

// 1-masala

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return "salom mening ismim " + this.name + " yoshim " + this.age + " da";
//   }
// }
// let newPerson = new Person("Nodirbek", 21);

// console.log(newPerson.greet());

// 2-masala

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposite(sum) {
//     this.balance += sum;
//     return { balance: this.balance };
//   }

//   withdraw(sum) {
//     if (this.balance < sum) {
//       return "hisobingizda mablag' yetarli emas";
//     } else {
//       this.balance -= sum;
//       return {
//         balance: this.balance,
//       };
//     }
//   }
// }
// let myBankaccount = new BankAccount(100000);

// console.log(myBankaccount.withdraw(222000));

// 3-masala

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     let res = this.width * this.height;
//     return {
//       maydoni: res,
//     };
//   }

//   perimetri() {
//     let res = (this.width + this.height) * 2;
//     return {
//       perimetri: res,
//     };
//   }
// }

// let newRec = new Rectangle(150, 200);

// console.log(newRec.perimetri());

// 4-masala

// class Student {
//   constructor(name, id, grades = []) {
//     this.name = name;
//     this.id = id;
//     this.grades = grades;
//   }

//   calculateAvg() {
//     let sum = 0;
//     for (const element of this.grades) {
//       sum += element;
//     }
//     let res = sum / this.grades.length;
//     return this.name + "ning o'rtacha bahosi " + res;
//   }
// }

// let newStudent = new Student("JOHN", 117453, [4, 5, 3, 2, 5, 5, 4]);
// console.log(newStudent.calculateAvg());

// 5-masala
// class Clock {
//   constructor() {
//     this.displayTime();
//     this.start();
//   }

//   displayTime() {
//     let now = new Date();
//     let time = now.toLocaleTimeString();
//     console.log(time);
//   }

//   start() {
//     return setInterval(() => this.displayTime(), 1000);
//   }
// }

// let myClock = new Clock();

// 6-masala

// class Employee {
//     constructor(name,position,salary){
//         this.name=name
//         this.position=position
//         this.salary=salary
//     }

//     giveRaise(percentage){
//          this.salary+=percentage
//          return {
//             name:this.name,
//             position:this.position,
//             salary: "sizning maoshingiz oshirildi "+this.salary
//          }
//     }
// }
// let newemploye=new Employee("john", "BankManger",3000)

// console.log(newemploye.giveRaise(1000));

// 7-masala

// class Order {
//   static items = [
//     { item: "CocaCola", quantity: 50 },
//     { item: "Redbull", quantity: 30 },
//     { item: "Fanta", quantity: 70 },
//   ];

//   static addItem(item, quantity) {
//     let result = this.items.find((i) => i.item === item);
//     if (result) {
//       result.quantity += quantity;
//     } else {
//       this.items.push({ item, quantity });
//     }
//   }
//   static removeitem(item) {
//     let index = this.items.findIndex((i) => i.item === item);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

// static  calculateTotal(){
//     let sum=0
//     for (const element of this.items) {
//         sum+=element.quantity
//         }
//             return {
//                 allproductquantity:sum
//             }
//     }

//   static product() {
//     return this.items;
//   }
// }

// Order.addItem("juice", 40);
// Order.addItem("CocaCola", 100);
// Order.removeitem("Fanta");

// // console.log(Order.calculateTotal());
// console.log(Order.product());

// 8-masala

// class Calculate{
//     static add(a,b){
// return a+b
//     }

//     static subtract(a,b){
//         return a-b
//     }
//     static multiply(a,b){
//         return a*b
//     }
//     static divide(a,b){
//         return a / b
//     }
// }

// console.log(Calculate.divide(15,5));

// 9-masala

// class Stack{
// static arr =[1,2,3,4]

//  static pushs(element){
// this.arr.push(element)
// return this.arr
//  }
// static pops(){
// let res=this.arr[this.arr.length-1]
// return res
// }
// static isEmpty(){
//     return this.arr.length === 0
// }

// }

// // console.log(Stack.pushs(5));
// // console.log(Stack.pops());
// console.log(Stack.isEmpty());

// 10-masala

// class Vehicle {
//   constructor(speed) {
//     this.speed = speed;
//   }
// }

// class Car extends Vehicle {
//   constructor(speed, fuel) {
//     super(speed);
//     this.fuel = fuel;
//   }
// }

// let cars = new Car(80, 35);

// console.log(cars);
 