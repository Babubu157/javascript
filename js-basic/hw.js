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

// let x = 97;
// let count = 0;

for (let i=2; i<x; i++){
    if(x%i !== 0){
    
    }
}
if(count === 1) {
console.log(x + " too bol ankhnii too");
}else{
console.log(x + " too bol ankhnii too bish");}

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

let arr1 = [4, 5, 6, 7];

let temp = arr1[0];
let m = 0;
for(let i=(arr1.length-1); i>=0; i--){
    arr1[m] = arr1[i];
    m++;
for(let j = (arr1.length-2); j >= 0; j--){
arr1[j+1] = arr1[j];
}

}
console.log(arr1);

