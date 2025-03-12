// const hevleh = () => {
//     console.log("hello");
// }

// setTimeout(hevleh, 5000);
// setInterval(hevleh, 5000);

let counter = 10;
let check = true;

const countDisplay = document.getElementById("count")

const btnStart = document.getElementById("start")

const btnStop = document.getElementById("stop")

const countStart =() => {
    console.log("Start");
   
        if (check){
            timerId = setInterval(() => {
                counter++;
                display();
            },1000)
                
        }
      
check = false;
};
const countStop =() => {    
    console.log("Stop");
    clearInterval(timerId);
    check = true;


};

const display = () => {
    countDisplay.innerText = counter;
}

display();

btnStart.addEventListener("click", countStart);
btnStop.addEventListener("click", countStop);
