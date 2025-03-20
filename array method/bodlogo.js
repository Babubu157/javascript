console.log("=========== Bodlogo 1 ==========");

let numbers = [10, 20, 30, 40, 50];

numbers.push(60);
numbers.unshift(5);
console.log(numbers);

console.log("=========== Bodlogo 2 ==========");
numbers.pop();
numbers.shift();
console.log(numbers);

console.log("=========== Bodlogo 3 ==========");
numbers.splice(1, 1, 100);
console.log(numbers);

console.log("=========== Bodlogo 4 ==========");

console.log(numbers.reverse());

console.log("=========== Bodlogo 5 ==========");

let number = [3, 6, 9, 12, 15];

let add2 = number.map((element) => {
  return element + 2;
});

console.log(add2);

let filtered = number.filter((element) => element > 8);
console.log(filtered);

let number2 = [18, 21, 24];

console.log((number = number.concat(number2)));

array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(array.flat());

console.log("=========== Bodlogo 3 ==========");

let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors.indexOf("green"));
let long = colors.find((element) => element.length > 5);
console.log(long);
console.log(colors.indexOf(long));

let startWithY = colors.find((element) => {
  if (element.startsWith("y", 0)) {
    return element;
  }
});
console.log(startWithY);

console.log("=========== Homework 1 ==========");

let words = ["hello", "world", "javascript", "coding"];

let result = words.includes("world");
console.log(result);

// Ямар нэгэн элемент 7-с дээш үсэгтэй эсэхийг шалгах.
// boolean utga butsaah esehiig lawlah
let result1 = words.find((element) => element.length > 7);
console.log(result1);

let result2 = words.join(",");
console.log(result2);

console.log("=========== Homework 2 ==========");

let numberArray = [4, 8, 12, 16];

// reduce яаж ажилладгийг асуух
const resultNum = numberArray.reduce((total, num) => total + num);
console.log(resultNum);

let newArray = [];
numberArray.forEach((el) => {
  el = el * 3;
  newArray.push(el);
  console.log(el);
});
console.log(newArray);
