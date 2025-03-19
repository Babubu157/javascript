const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const btnAdd = document.getElementById("add");
//const addBtn = document.getElementByClass("add")[0];
// class -r sobgohod array butsaadag uchir 1 utga butsaaj bgaa ch array helbertei bichne
const btnSub = document.getElementById("sub");
const btnMulti = document.getElementById("multi");
const btnDiv = document.getElementById("divide");
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("dot");
// const btnZero = document.getElementById("zero");
const btnClear = document.getElementById("clear");
const btnReverse = document.getElementById("reverse");
let operand1 = 0;
let operand2 = 0;
let operator = " ";
let result = 0;

for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    console.log("Clicked", btn.innerText);
    if (display.innerText === "0") {
      display.innerText = btn.innerText;
    } else {
      display.innerText += btn.innerText;
    }
  });
}

btnAdd.addEventListener("click", () => {
  console.log("clicked add button");
  operand1 = display.innerText;
  operator = "add";
  display.innerText = "";
});

btnSub.addEventListener("click", () => {
  console.log("clicked sub button");
  operand1 = display.innerText;
  operator = "sub";
  display.innerText = "";
});

btnMulti.addEventListener("click", () => {
  console.log("clicked sub button");
  operand1 = display.innerText;
  operator = "multi";
  display.innerText = "";
});

btnDiv.addEventListener("click", () => {
  console.log("clicked sub button");
  operand1 = display.innerText;
  operator = "divide";
  display.innerText = "";
});

btnDot.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += btnDot.innerText;
  }
});

btnReverse.addEventListener("click", () => {
  if (!display.innerText.includes("-")) {
    display.innerText = "-" + display.innerText;
  } else {
    display.innerText = display.innerText.substring(
      1,
      display.innerText.length
    );
  }
});

// const newStr = str.replace("Hello", "Welcome");
// console.log(newStr);
// console.log(str);

// const arr = str.trim().replace("Hello", "Welcome").toLowerCase().split(" ");
// const subStr = str.substring(6, 12);

// console.log(subStr);
// console.log(arr);

btnEqual.addEventListener("click", () => {
  operand2 = display.innerText;
  console.log(operand1);
  console.log(operand2);
  if (operator === "add") {
    result = parseFloat(
      (parseFloat(operand1) + parseFloat(operand2)).toFixed(8)
    );
    if (result) console.log(operand1);
    console.log(operand2);
  } else if (operator === "sub") {
    result = parseFloat(
      (parseFloat(operand1) - parseFloat(operand2)).toFixed(8)
    );
    console.log(operand1);
    console.log(operand2);
  } else if (operator === "multi") {
    result = parseFloat(
      (parseFloat(operand1) * parseFloat(operand2)).toFixed(2)
    );
    console.log(operand1);
    console.log(operand2);
  } else if (operator === "divide") {
    result = parseFloat(
      (parseFloat(operand1) / parseFloat(operand2)).toFixed(2)
    );
    console.log(operand1);
    console.log(operand2);
  }

  display.innerText = result;
});

btnClear.addEventListener("click", () => {
  display.innerText = "0";
  operand1 = 0;
  operand2 = 0;
  result = 0;
});
