let count = document
  .querySelector(".main-slide")
  .querySelectorAll("div").length;
const height = document.querySelector(".container").clientHeight;
let activeCounter = 0;

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
mainSlide.style.top = `-${count - 1}00vh`;

upBtn.onclick = () => {
  activeCounter--;
  if (activeCounter < 0) {
    activeCounter = count - 1;
  }
  mainSlide.style.transform = `translateY(${activeCounter * height}px)`;
  sidebar.style.transform = `translateY(-${activeCounter * height}px)`;
};
downBtn.onclick = () => {
  activeCounter++;
  if (activeCounter === count) {
    activeCounter = 0;
  }
  mainSlide.style.transform = `translateY(${activeCounter * height}px)`;
  sidebar.style.transform = `translateY(-${activeCounter * height}px)`;
};
document.onkeydown = (key) => {
  if (key.key === "ArrowUp") {
    activeCounter--;
    if (activeCounter < 0) {
      activeCounter = count - 1;
    }
    mainSlide.style.transform = `translateY(${activeCounter * height}px)`;
    sidebar.style.transform = `translateY(-${activeCounter * height}px)`;
  } else if (key.key === "ArrowDown") {
    activeCounter++;
    if (activeCounter === count) {
      activeCounter = 0;
    }
    mainSlide.style.transform = `translateY(${activeCounter * height}px)`;
    sidebar.style.transform = `translateY(-${activeCounter * height}px)`;
  }
};
