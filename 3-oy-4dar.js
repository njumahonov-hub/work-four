// 1-masala

// function isPalindromicSubstring(str) {
//   let longest = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       let res = str.slice(i, j + 1);
//       let reversed = res.split("").reverse().join("");
//       if (res === reversed && res.length > longest.length) {
//         longest = res;
//       }
//     }
//   }
//   return longest;
// }
// console.log(isPalindromicSubstring("babad"));

// 2-masala

// function rotateArray(arr, num) {
//   let newarr = arr.splice(0, num);
//   arr.push(...newarr);
//   return arr;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));

// 3-masala

// function twosum(arr, num) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         result.push(i);
//       }
//     }
//   }
//   return result;
// }
// console.log(twosum([2, 7, 11, 15], 9));

// 4-masala

// function number(arr, num) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum === num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(number([2, 4, 3], 7));

// 5-masala

// function arrfunc(arr1, arr2) {
//   let res = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       res.push(arr1[i], arr2[i]);
//     }
//   }

//   return res;
// }
// console.log(arrfunc([2, 4, 1], [2, 3, 8]));

// 6-masala

// function mostFrequentElement(arr) {
//   let maxcount = 0;
//   let mostitem = null;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > maxcount) {
//       maxcount = count;
//       mostitem = arr[i];
//     }
//   }
//   return mostitem;
// }
// console.log(mostFrequentElement([1, 2, 2, 2, 2, 3, 1, 4, 5, 1]));

// 7-masala

// function incrementDigits(str) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0) {
//       res += 1 + Number(str[i]);
//     }
//   }
//   let newstr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (isNaN(str[i]) && str[i] !== " ") newstr += str[i];
//   }
//   return newstr + res;
// }
// console.log(incrementDigits("abs123"));

// 8-masala

// function longestIncreasingSubarrey(arr) {
//   let maxleng = 1;
//   let countleng = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       countleng++;
//       if (countleng > maxleng) maxleng = countleng;
//     } else {
//       countleng = 1;
//     }
//   }
//   return maxleng;
// }
// console.log(longestIncreasingSubarrey([10, 20, 30, 10, 40, 50, 52, 55, 6]));

// 9-masala

// function countOccurrneces(arr) {
//   let obj = {};
//   for (const element of arr) {
//     if (obj[element]) {
//       obj[element]++;
//     } else {
//       obj[element] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countOccurrneces([1, 2, 2, 3, 4, 4, 4, 5]));

// 10-masala

// function matrixSum(arr) {
//   let sum = 0;

//   for (const element of arr) {
//     for (let i = 0; i < element.length; i++) {
//       sum += element[i];
//     }
//   }
//   return sum;
// }
// console.log(
//   matrixSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
