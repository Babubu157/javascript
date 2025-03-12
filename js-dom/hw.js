// console.log("DOM - hw");
const randtomToo = Math.floor(Math.random() * 10); // 0-1\
console.log(randtomToo);

const boxColor = document.getElementById("box");

const greenBtn = document.getElementById("blue");
const redBtn = document.getElementById("red");
const randBtn = document.getElementById("random");

greenBtn.addEventListener("click", () => {
  boxColor.style.backgroundColor = "blue";
});

redBtn.addEventListener("click", () => {
  boxColor.style.backgroundColor = "red";
});

randBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  boxColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
