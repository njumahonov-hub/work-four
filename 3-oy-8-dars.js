// 1-masala

// function isPalindrome(str) {
//     let res=""
//     for (let i = str.length-1; i >=0; i--) {
//        res+=str[i]

//     }
// if(str === res){
//     return true
// }else{
//     return false
// }

// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("apple"));

// 2-masala

// function numFunc(num) {
//   let res = "";
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     res += str[i] = "/";
//   }
//   return res;
// }
// console.log(numFunc(100));

// 3-masala

// function swapElement(arr, num1, num2) {
//   let num = arr[num1];

//   arr[num1] = arr[num2];
//   arr[num2] = num;

//   return arr;
// }
// console.log(swapElement([1, 22, 13, 4], 1, 2));

// // 4-masala

// function strFunc(str) {
//   let arr = str.split("");
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
// console.log(strFunc("javascript"));

// 5-masala

// function isAnagram(str1,str2) {

// return str1.split("").sort().join("") === str2.split("").sort().join("")
// }
// console.log(isAnagram("listen","silent"));
// console.log(isAnagram("hello","world"));

// 6-masala

// function longestSubstring(str) {
//   let start = 0;
//   let maxLen = 0;
//   let maxSubstring = "";
//   let charIndex = new Map();

//   for (let end = 0; end < str.length; end++) {
//     const currentChar = str[end];

//     if (charIndex.has(currentChar) && charIndex.get(currentChar) >= start) {
//       start = charIndex.get(currentChar) + 1;
//     }

//     charIndex.set(currentChar, end);

//     if (end - start + 1 > maxLen) {
//       maxLen = end - start + 1;
//       maxSubstring = str.slice(start, end + 1);
//     }
//   }

//   return maxSubstring;
// }

// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("bbbbb"));

// 7-masala'

// function maxSubarraySum(arr) {
//   let yigindi = 0;
//   let max = arr[0];

//   for (let element of arr) {
//     yigindi = Math.max(element, yigindi + element);

//     max = Math.max(max, yigindi);
//   }

//   return max;
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 8-masala

// function twoSum(arr,num) {
// let res=[]
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length; j++) {
//     if(arr[i] + arr[j]=== num){
//         res.push(arr[i],arr[j])
//     }

//    }
//     return res
// }

// }
// console.log(twoSum([2,7,11,15],9));

// 9-masala

// function LongestConstecutive(arr) {
//   let res = [];
//   let newarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 || arr[i] > arr[i - 1]) {
//       newarr.push(arr[i]);
//     } else {
//       if (newarr.length > res.length) {
//         res = newarr;
//       }
//       newarr = [arr[i]];
//     }
//   }

//   if (newarr.length > res.length) {
//     res = newarr;
//   }

//   return res;
// }
// console.log(LongestConstecutive([1, 4, 200, 2, 3]));

// 10-masala

// function sumPositivesandNegatives(arr) {
//   let sumP = 0;

//   let sumN = 0;

//   for (const element of arr) {
//     if (element > 0) {
//       sumP += element;
//     } else {
//       sumN += element;
//     }
//   }
//   return {
//     positiveSum: sumP,
//     negativeSum: sumN,
//   };
// }
// console.log(sumPositivesandNegatives([1, -2, 3, -4, 5]));


