// 1-masala

// function arrfunc(arr,num) {
//     let yaqinfarq=Infinity
// let res=[]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//        let sum=arr[i]+arr[j]
//         let farq=Math.abs(num-sum)

//         if (farq < yaqinfarq){
//             yaqinfarq = farq

//             res= [arr[i],arr[j]]
//         }
//     }

// }
// return res
// }
// console.log(arrfunc([21,43,11,45,4,32,54],35));

// 2-masala

// function arrfunc(arr) {
//   let res = [];
//   for (const element of arr) {
//     if (element % 2 == 0) {
//       let juft1 = element;
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//           res.push(arr[i] + juft1);
//         } else {
//           res.push(arr[i]);
//         }
//       }
//       return res;
//     }
//   }
// }
// console.log(arrfunc([1, 4, 5, 2, 33, 1, 8, 22]));

// 3-masala

// function arrfunc(arr) {
//   let res = [];
//   for (const element of arr) {
//     if (element % 2 === 1) {
//       res.push(element);
//     }
//   }
//   let newarr = [];
//   let last = res[res.length - 1];
//   for (const element of res) {
//       newarr.push(element + last);
//   }
//   return newarr;
// }
// console.log(arrfunc([2, 55, 2, 21, 44, 3]));

// 4-masala

// function minmax(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let minindex = arr.indexOf(min);
//   let maxindex = arr.indexOf(max);

//   let temp = arr[minindex];
//   arr[minindex] = arr[maxindex];
//   arr[maxindex] = temp;
//   return arr;
// }
// console.log(minmax([23, 43, 12, 56, 64]));

// 5-masala

// function minmax(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let minindex = arr.indexOf(min);
//   let maxindex = arr.indexOf(max);

//   if (minindex > maxindex) {
//     [minindex, maxindex] = [maxindex, minindex];
//   }

//   for (let i = minindex + 1; i < maxindex; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }
// console.log(minmax([2, 54, 4, 11, 2, 1, 34, 11]));

// 6-masala

// function arrfunc(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let indexmin = arr.indexOf(min);
//   let indexmax = arr.indexOf(max);

//   if (indexmin > indexmax) {
//     [indexmin, indexmax] = [indexmax, indexmin];
//   }

//   let middle = arr.slice(indexmin + 1, indexmax);
//   middle.reverse();
//   for (let i = 0; i < middle.length; i++) {
//     arr[indexmin + 1 + i] = middle[i];
//   }

//   return arr;
// }
// console.log(arrfunc([2, 54, 4, 11, 2, 1, 34, 11]));

// 7-masala

// function arrfunc(arr, num) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == num) {
//       continue;
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(arrfunc([54, 23, 65, 12], 1));

// 8-masala

// function arrfunc(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }
// console.log(arrfunc([12, 43, 43, 23, 23, 54, 12, 23]));

// 9-masala

// function arrfunc(arr) {
//   let obj = {};
//   for (const element of arr) {
//     if (obj[element]) {
//       obj[element]++;
//     } else {
//       obj[element] = 1;
//     }
//   }
//   res = [];
//   for (const key in obj) {
//     if (obj[key] === 3) {
//       res.push(Number(key));
//     }
//   }
//   return res;
// }
// console.log(arrfunc([12, 12, 44, 54, 44, 44, 2, 22, 2, 2]));

// 10- masala

// function arrfunc(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(arrfunc([2, 43, 53, 23, 22, 53, 88, 10]));
