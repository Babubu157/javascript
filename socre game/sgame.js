const pl1 = document.getElementById("pl1");
const pl2 = document.getElementById("pl2");
const body = document.querySelector("body");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const reset = document.getElementById("reset");
const winner = document.getElementsByClassName("color")[0];

// pl1.addEventListener("click", () => {
//   console.log(pl1.style.width);
//   orgon += 5;
//   pl1.style.width = `${orgon}%`;
// });
const isEndGame = () => {
  return score1.innerText === "100" || score2.innerText === "100";
};
const changeColor = (event) => {
  console.log(event.keyCode);

  switch (event.keyCode) {
    case 97:
      if (isEndGame()) {
        return;
      }
      if (score1.innerText < 100) {
        console.log("a");
        score1.innerText = parseInt(score1.innerText) + 5;
        score2.innerText = parseInt(score2.innerText) - 5;
        pl1.style.width = `${score1.innerText}%`;
        pl2.style.width = `${score2.innerText}%`;
        if (score1.innerText === "100") {
          pl1.innerText = "WINNER! Congratulations Player GREEN";
        }
        console.log("b");
      }
      break;
    case 108:
      if (isEndGame()) {
        return;
      }
      if (score2.innerText < 100) {
        score1.innerText = parseInt(score1.innerText) - 5;
        score2.innerText = parseInt(score2.innerText) + 5;
        pl1.style.width = `${score1.innerText}%`;
        pl2.style.width = `${score2.innerText}%`;
        if (score2.innerText === "100") {
          pl2.innerText = "WINNER! Congratulations Player PINK";
        }
      }
      break;
  }
};

body.addEventListener("keypress", changeColor);

const resetGame = () => {
  score1.innerText = 50;
  score2.innerText = 50;
  pl1.style.width = `${50}%`;
  pl2.style.width = `${50}%`;
  pl1.innerText = "";
  pl2.innerText = "";
};

reset.addEventListener("click", resetGame);
