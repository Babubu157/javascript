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

// array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(array.flat());

console.log("=========== Bodlogo 3 ==========");

let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors.indexOf("green"));
// let long = colors.find((element) => element.length > 5);
// console.log(long);
// console.log(colors.indexOf(long));

let longerThan5 = colors.findIndex((element) => element.length > 5);
console.log("5-aas ikh urttai :", longerThan5);

let startWithY = colors.map((element) => {
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

console.log("=========== 0320 bodlogo ==========");

const students = [
  { id: 1, name: "Alice", age: 14, grade: "8th" },
  { id: 2, name: "Bob", age: 15, grade: "9th" },
  { id: 3, name: "Charlie", age: 14, grade: "8th" },
  { id: 4, name: "David", age: 16, grade: "10th" },
];
const schools = [
  { name: "Greenwood High", city: "New York", minAge: 14 },
  { name: "Riverside Academy", city: "Los Angeles", minAge: 15 },
];

// (element) => {
//   element.age >= schools.minAge;
// };

// console.log(findSchool);

// const eligibleSchools = students.find(findSchool);

// array1 = [1, 2, 3];

// let newArray1 = array1.concat(array1);
// console.log(newArray1);

const eligibleSchools = students.map((student) => {
  const findSchool = schools.filter((school) => {
    if (student.age <= school.minAge) {
      return school;
    }
  });
  return {
    name: student.name,
    eligibleSchool: findSchool.map((schoolName) => {
      return schoolName.name;
    }),
  };
});

console.log(eligibleSchools);

// const studentMatches = students.map(student => {

//   const filteredEligibleSchools = schools.filter(school => school.minAge >= student.age)
//   const schoolNames = filteredEligibleSchools.map(s => s.name);
//   const joinedSchoolNames = schoolNames.join(',')

//   return {
//       ...student,
//       eligibleSchools: joinedSchoolNames
//   }
// });

// console.log(studentMatches);

let value = 9;
const array = ["++X", "X++", "--X", "X--", "X++"];

array.forEach((el) => {
  if (el === "++X" || el === "X++") {
    value += 1;
  } else {
    value -= 1;
  }
});
console.log(value);

const n = 100;
const m = 3;

let num1 = 0;
let num2 = 0;
let diff = 0;

const myFunction = (n, m) => {
  for (i = 1; i <= n; i++) {
    console.log(i);
    if (i % m !== 0) {
      num1 = num1 + i;
      console.log();
    } else {
      num2 = num2 + i;
    }
    diff = num1 - num2;
  }
  console.log("Hariu: ", diff);
};

myFunction(100, 3);


console.log("=========== 0321 bodlogo ==========");

const l = 2;

const myFunction1 = () => 