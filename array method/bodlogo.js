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
let long = colors.filter((element) => element.length > 5);
console.log(long);
console.log(colors.indexOf(long[0]));
