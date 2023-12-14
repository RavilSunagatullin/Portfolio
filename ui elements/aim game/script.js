const superBtn = (document.querySelector(".super").onclick = () => {
  for (screen of screens) {
    try {
      screen.classList.remove("up");
    } catch {
      continue;
    }
  }
});

const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
startBtn.onclick = (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
};

let time = 0;
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");
timeList.onclick = (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    setTime(time);
    startGame();
    score = 0;
  }
};

const board = document.querySelector("#board");
let score = 0;
board.onclick = (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
};

let intervalId;
function startGame() {
  board.innerHTML = ``;
  timeEl.parentElement.classList.remove("hide");
  createRandomCircle();
  createRandomCircle();
  createRandomCircle();
  let intervalId = setInterval(subTime, 1000);
}
function subTime() {
  if (time == 0) {
    finishGame();
    clearInterval(intervalId);
  } else {
    time--;
    if (time < 10) {
      time = `0${time}`;
    }
    setTime(time);
    console.log(time);
  }
}
function setTime(num) {
  timeEl.innerHTML = `${num}:00`;
}
function finishGame() {
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
  timeEl.parentElement.classList.add("hide");
}
function createRandomCircle() {
  const circle = document.createElement("div");
  const { width, height } = board.getBoundingClientRect();
  circle.classList.add("circle");
  let size = getNumber(15, 50);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  let xPosition = getNumber(1 + 10 + size, width - size - 10);
  let yPosition = getNumber(1 + 10 + size, height - size - 10);
  circle.style.top = `${yPosition}px`;
  circle.style.left = `${xPosition}px`;
  board.append(circle);
}
function getNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
