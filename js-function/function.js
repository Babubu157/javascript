// let x = 100;
// if (x % 2 === 0) {
//   console.log("Tegsh");
// } else {
//   console.log("Sondgoi");
// }

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (x % 2 === 0) {
//     console.log("Tegsh", arr[i]);
//   } else {
//     console.log("Sondgoi", arr[i]);
//   }
// }

// function oddOrEven(a) {
//   if (a % 2 === 0) {
//     console.log("Tegsh", a);
//   } else {
//     console.log("Sondgoi", a);
//   }
// }

// let arr1 = [7, 2, 9, 4, 5, 20];
// for (let i = 0; i < arr1.length; i++) {
//   oddOrEven(arr1[i]);
// }

// console.log("==============================================");
// function isEven(inputNumber) {
//   if (inputNumber % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let y = isEven(11);
// console.log(y);

// console.log("======================== Arithmetic =======================");

// function subs(a, b) {
//   return a - b;
// }

// function div(a, b) {
//   return a / b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function add(a, b) {
//   return a + b;
// }

// let c = add(3, 4);
// console.log("+", c);

// let d = subs(5, 3);
// console.log("-", d);

// let e = multiply(4, 10);
// console.log("*", e);

// let f = div(20, 10);
// console.log("/", f);




// declaration bichiglel // function

function addDeclare(a, b) {
  return a + b;
}
let sum = addDeclare(10,20); // declaration - zarlaj bna
console.log(sum); 
 
 // Arrow function // ES6
 // Expression bichiglel

 const add = (a,b) => {
  return a + b;
 }

 const add1 = (a,b) => a + b;


<<<<<<< Updated upstream
let urDun = add(50,60);
console.log("Arrow add function: ", urDun)ax
=======
let f = div(20, 10);
console.log("/", f);

console.log("===================== Bituunii bodlogo ===================");

const employees = [
  { id: 1, name: "Бат", age: 25, position: "Developer", salary: 2500000 },
  { id: 2, name: "Сараа", age: 30, position: "Manager", salary: 3500000 },
  { id: 3, name: "Дорж", age: 22, position: "Intern", salary: 1000000 },
  { id: 4, name: "Тэмүүлэн", age: 40, position: "CEO", salary: 6000000 },
  { id: 5, name: "Одмаа", age: 28, position: "Designer", salary: 2700000 },
  { id: 6, name: "Ганбаа", age: 35, position: "HR", salary: 2200000 },
  { id: 7, name: "Мөнхөө", age: 29, position: "QA Engineer", salary: 2400000 },
  {
    id: 8,
    name: "Номин",
    age: 33,
    position: "Project Manager",
    salary: 3700000,
  },
  { id: 9, name: "Хишигээ", age: 24, position: "Marketing", salary: 2300000 },
  {
    id: 10,
    name: "Төгөлдөр",
    age: 27,
    position: "Backend Developer",
    salary: 2800000,
  },
];

console.log("===================== Bituunii bodlogo 1 ===================");

const employeeName = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log("Employee name: ", list[i].name);
  }
};

employeeName(employees);

console.log("===================== Bituunii bodlogo 2 ===================");

const employeeAvgAge = (list) => {
  let avgAge = 0;
  let ageSum = 0;
  for (let i = 0; i < list.length; i++) {
    ageSum = ageSum + list[i].age;
  }
  avgAge = ageSum / list.length;
  console.log("Employee average age: ", avgAge);
};

employeeAvgAge(employees);

console.log("===================== Bituunii bodlogo 3 ===================");

const employee30plus = (list, nas) => {
  let findAge = [];
  let j = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= nas) {
      findAge[j] = list[i];
      j++;
    }
  }
  return findAge;
};

let result = employee30plus(employees, 30);
console.log(result);

console.log("===================== Bituunii bodlogo 4 ===================");
const findDev = (list, position) => {
  let findDev = [];
  let j = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].position === position) {
      findDev[j] = list[i];
      j++;
    }
  }
  return findDev;
};

let resultDev = findDev(employees, "Developer");
console.log(resultDev);

console.log("===================== Bituunii bodlogo 5 ===================");

const totalNumOfEmployees = (list) => {
  return list.length;
};

let totalEmployeecount = totalNumOfEmployees(employees);
console.log(totalEmployeecount);
>>>>>>> Stashed changes
