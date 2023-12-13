const container = document.querySelector("#board");
const squares_num = 1333;

for (let i = 0; i < squares_num; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.onmouseover = () => {
    setColor(square);
  };
  square.onmouseleave = () => {
    clearColor(square);
  };

  container.append(square);
}
function setColor(element) {
  let color = getRandomColor()
  element.style.background = `${color}`;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function clearColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
