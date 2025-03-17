const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const btnAdd = document.getElementById("add");
let operand1 = 0;
let operand2 = 0;
let operator = " ";
let result = 0;
//const addBtn = document.getElementByClass("add")[0];
// class -r sobgohod array butsaadag uchir 1 utga butsaaj bgaa ch array helbertei bichne
const btnSub = document.getElementById("sub");
const btnMulti = document.getElementById("multi");
const btnDiv = document.getElementById("divide");
const btnEqual = document.getElementById("equal");
// const btnDot = document.getElementById("dot")


for( const btn of numberBtns) {
    btn.addEventListener("click", () => {
        console.log("Clicked", btn.innerText);
        display.innerText += btn.innerText;
    })
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

btnEqual.addEventListener("click", 
    () => { 

        operand2 = display.innerText;
        console.log(operand1);
        console.log(operand2);
    if (operator === "add"){
    result = parseFloat(operand1) + parseFloat(operand2);
    console.log(operand1);
        console.log(operand2);
    }
    else if(operator === "sub"){
    result = parseFloat(operand1) - parseFloat(operand2);
    console.log(operand1);
        console.log(operand2);
    }
    else if(operator === "multi"){
    result = parseFloat(operand1) * parseFloat(operand2);  
    console.log(operand1);
        console.log(operand2);
    }
    else if(operator === "divide"){
    result = parseFloat(operand1) / parseFloat(operand2);   
    console.log(operand1);
        console.log(operand2);
    }
    display.innerText = result;
});


