// const time = new Date();
// console.log("Time: ", time.getFullYear());
// console.log("Time: ", time.getMonth());
// console.log("Time: ", time.getDate());
// console.log("Time: ", time.getDay());
// console.log("Time: ", time.getHours());
// console.log("Time: ", time.getMinutes());
// console.log("Time: ", time.getSeconds());

let date = document.getElementById("date");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let dateTime = new Date();

const dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let thisDayOfWeek = dayWeek[dateTime.getDay()];
let thisMonth = month[dateTime.getMonth()];

date.innerText = `${thisDayOfWeek}, ${dateTime.getDate()} ${thisMonth} ${dateTime.getFullYear()}`;
// if (timerId === null) {
//   timerId = setInterval(() => {
//     times.innerText = `${time1.getHours()}:${time1.getMinutes()}:${time1.getSeconds()}`;
//   }, 1000);
// }
// const displayTime = () => {
//   console.log("start");
//   times.innerText = `${time1.getHours()}:${time1.getMinutes()}:${time1.getSeconds()}`;
// };

setInterval(() => {
  hour.innerText = dateTime.getHours();
  min.innerText = dateTime.getMinutes();
  sec.innerText = dateTime.getSeconds();
}, 1000);
