let millSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let millSecond1 = 0;
let second1 = 0;
let minute1 = 0;
let hour1 = 0;
let check = true;
let lapNum = 1;
let check1 = true;

const timerDisplay = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnReset = document.getElementById("reset");
const lapList = document.getElementById("lap-list");
const test1 = document.getElementById("lap-list1");

const timer = () => {
  console.log("Start");
  if (btnStart.innerText === "Start") {
    btnStart.innerText = "Stop";
    btnStart.classList.add("stop");
    btnReset.innerText = "Lap";
    timerStart();
  } else {
    btnStart.innerText = "Start";
    btnStart.classList.remove("stop");
    btnReset.innerText = "Reset";
    timerStop();
  }
};

const formatTime = (num) => {
  let = formatString = "";
  if (num < 10) {
    formatString = "0" + num;
  } else {
    formatString = num;
  }
  return formatString;
  // return num.toString().padStart(2, "0");
};

const reset = () => {
  if (btnReset.innerText === "Reset") {
    hour = 0;
    minute = 0;
    second = 0;
    millSecond = 0;
    lapList.innerHTML = "";
    lapNum = 1;
    display();
  } else {
    if (lapNum === 1) {
      lapAdd();
    } else {
      lapAdd1();
    }
  }
};

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
      display(hour, minute, second, millSecond);
    }, 10);
    check = false;
  }
};

const timerStop = () => {
  console.log("Stop");
  clearInterval(timerId);
  clearInterval(timerId1);
  check = true;
};

const lapAdd = () => {
  const laps = `
    <div class="lap-container">
      <h4>Lap ${lapNum}</h4>
      <p>${formatTime(hour)}:${formatTime(minute)}:${formatTime(
    second
  )}:${formatTime(millSecond)}</p>
      </div>
    `;
  lapList.innerHTML = laps;
  lapNum++;
};

const lapAdd1 = () => {
  const laps1 = `
    <div class="lap-container">
      <h4>Lap ${lapNum}</h4>
      <p>
      ${(timerId1 = setInterval(() => {
        millSecond1++;
        if (millSecond1 === 100) {
          second1++;
          millSecond1 = 0;
          if (second1 === 60) {
            minute1++;
            second1 = 0;
            if (minute1 === 60) {
              hour1++;
              minute1 = 0;
            }
          }
        }
      }, 10)`${formatTime(hour1)}:${formatTime(minute1)}:${formatTime(
        second1
      )}.${formatTime(millSecond1)}`)}
      </p>
    </div>
    `;
  test1.innerHTML += laps1;
};

const display = () => {
  timerDisplay.innerText = `${formatTime(hour)}:${formatTime(
    minute
  )}:${formatTime(second)}.${formatTime(millSecond)}`;
};

btnStart.addEventListener("click", timer);
btnReset.addEventListener("click", reset);
