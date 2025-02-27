// let a = 1234;
// let b = 0;
// let digit = 0;
// console.log("Homework 1")
// console.log(a);
// while (a !== 0){
//     digit = a % 10;
//     a = (a - digit) / 10;
//     b = (b * 10) + digit;

// }
// console.log(b);

// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log("Homework 2")

// let a1 = 2345;
// let digit1 = 0;

// while (a1 !== 0){
//     digit1 = (a1 % 10);
//     a1 = (a1 - digit1) / 10;
// }
// console.log(digit1);
// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 3")

// let times = 4;
// for(let i=1; i<=10;i++){
//     console.log(times + " * " + i + " = " + (times*i))
// }

// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 4")
//
let x = 27;
let countSUM = 0;
for (x = 1; x <= 1000; x++) {
  let count = 0;
  let count1 = 0;
  for (let i = 2; i < x; i++) {
    if (count === 1) {
      break;
    }
    if (x % i !== 0) {
      count1 = 0;
    } else {
      count++;
    }
  }
  if (count === 0 && count1 === 0) {
    console.log(x + " too bol ankhnii too");
    countSUM++;
  } else {
    //console.log(x + " too bol ankhnii too bish");
  }
}

// console.log(countSUM);

// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 5")

// let arr = [2,3,5,7,3,9], c = 5, dup = 0;

// for(i=0; i<arr.length; i++){
// if(arr[i] === c){
//     dup++;
// }
// }
// console.log("Өгөгдсөн тоо " + dup + " удаа орсон байна");

// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 6")

// let arr1 = [4, 5, 6, 7];
// let arr2 = [0,0,0,0];
// let m = 0;
// for(let i=(arr1.length-1); i>=0; i--){
// arr2[m] = arr1[i];
// m++;
// }
// console.log(arr2);

// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 7")

// let arr3 = [10, 20, 30, 40, 50];
// let z=40;
// for(let index=0; index<arr3.length; index++){
//     if(arr3[index] === z){
//         console.log("INDEX",index);
//     }
// }

// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log("Homework 8")

// let arr4 =  [30, 90, 10, 40, 20];

let arr = [11, 7, 2, 3, 4, 9];
let arr1 = [6, 8, 49, 4, 5, 23];
let x = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr[i] === arr1[j]) {
      console.log(arr[i], arr1[j]);
      x = 1;
      break;
    }
  }
  if (x === 1) {
    break;
  }
}
