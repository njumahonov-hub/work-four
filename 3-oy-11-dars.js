// 1-masala

// function arrfunc(arr) {

//     let obj = {}
//     let count = 0
//     let num=arr[0]
//     for (const element of arr) {
//       obj[element] = (obj[element] || 0) + 1
//         if(obj[element] > count){
//             count = obj[element]
//             num = element
//         }
//     }
//     return {element: num, count:count}
// }
// console.log(arrfunc([3,7,3,2,3,7,7,8,7]));

// 2-masala

// function arrfunc(arr) {

//     let res=[]
//     for (const element of arr) {
//         if(element%2=== 0){
//             res.push(element)
//         }
//     }
//     return res.length
// }
// console.log(arrfunc([2,1,2,3,4]));

// 3-masala

// function arrfunc(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(arrfunc([1, 2, 2, 3, 4, 4, 5]));

// 4-masala

// function strfunc(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(strfunc("Men javascriptni o'rganmoqdaman"));

// 5-masala

// function strfunc(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (isNaN(str[i])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(strfunc("123a5"));

// 6-masala

// function arrfunc(arr) {
//   let res = [];
//   for (const element of arr) {
//     let count = 0;
//     for (const el of element) {
//       if (el == "e") {
//         count++;
//       }
//     }
//     if (count >= 2) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(arrfunc(["elephant", "apple", "tree", "cheese", "banana"]));

// 7-masala

// function arrfunc(arr) {
//   let res = [];

//   for (const element of arr) {
//     let alif = true;

//     for (let i = 0; i < element.length - 1; i++) {
//       if (element[i] > element[i + 1]) {
//         alif = false;
//         break;
//       }
//     }

//     if (alif) res.push(element);
//   }

//   return res;
// }
// console.log(arrfunc(["abs", "dog", "xyz", "apple"]));

// 8-masala

// function toarray(num) {
//   if (num >= 0) {
//     let res = [];
//     let str = num.toString();
//     for (let i = 0; i < str.length; i++) {
//       res.push(str[i]);
//     }
//     return res;
//   } else if (Array.isArray(num)) {
//     let res1 = "";
//     for (const element of num) {
//       res1 += element;
//     }
//     return Number(res1);
//   }
// }
// console.log(toarray([2, 3, 5]));
// console.log(toarray(235));

// 9-masala

// function arrfunc(arr) {
//   let count = 1;
//   for (const el of arr) {
//     if (Array.isArray(el)) {
//       count += arrfunc(el);
//     }
//   }
//   return count;
// }
// console.log(arrfunc([[[[[]]]]]));

// 10-masala

// function findsum(num) {
//   let str = num.toString();
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }
// console.log(findsum(4567));
