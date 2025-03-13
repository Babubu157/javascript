// let lap = "00:00:00";
let millSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let check = true;

const timerDisplay = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");

const timerStart = () => {
  if (check) {
    console.log("start");
    timerId = setInterval(() => {
      millSecond++;
      if (millSecond === 100) {
        second++;
        millSecond = 0;
        if (second === 60) {
          minute++;
          second = 0;
          if (minute === 60) {
            hour++;
            minute = 0;
          }
        }
      }
      display();
    }, 10);
  }
  check = false;
};

const timerStop = () => {
  console.log("Stop");
  clearInterval(timerId);
};

const display = () => {
  timerDisplay.innerText = `${hour}:${minute}:${second}.${millSecond}`;
};

btnStart.addEventListener("click", timerStart);
btnStop.addEventListener("click", timerStop);
