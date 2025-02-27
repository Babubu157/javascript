let x = 100;
if (x % 2 === 0) {
  console.log("Tegsh");
} else {
  console.log("Sondgoi");
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (x % 2 === 0) {
    console.log("Tegsh", arr[i]);
  } else {
    console.log("Sondgoi", arr[i]);
  }
}

function oddOrEven(a) {
  if (a % 2 === 0) {
    console.log("Tegsh", a);
  } else {
    console.log("Sondgoi", a);
  }
}

let arr1 = [7, 2, 9, 4, 5, 20];
for (let i = 0; i < arr1.length; i++) {
  oddOrEven(arr1[i]);
}

console.log("==============================================");
function isEven(inputNumber) {
  if (inputNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let y = isEven(11);
console.log(y);

console.log("======================== Arithmetic =======================");

function subs(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

let c = add(3, 4);
console.log("+", c);

let d = subs(5, 3);
console.log("-", d);

let e = multiply(4, 10);
console.log("*", e);

let f = div(20, 10);
console.log("/", f);
