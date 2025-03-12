let lap = "00:00:00";

const timerDisplay = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");

const timerStart = () => {
    console.log("start");
    if(check){
        timerId = setInterval(
            () => {
                millSecond++;
                if(millSecond === 100){
                    
                }
            }, 10
        )
    }
};

btnStart.addEventListener("click", timerStart);