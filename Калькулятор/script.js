const signsArr = ["/", "*", "-", "+"];
const anyFunctions = ["%", "с", "a/c"];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const input = document.querySelector("#input");

const buttons = document.querySelectorAll(".button").forEach(function (item) {
  item.onclick = function (el) {
    let count = input.value.length;
    singFirstСondition =
      signsArr.includes(input.value[count - 1]) &
      signsArr.includes(el.target.value);
    singSecondCondition = !signsArr.includes(input.value[0]) & (count == 0);
    if (numbersArr.includes(el.target.value)) {
      return numFunc(el.target.value);
    }
    if (el.target.value == "=") { 
      return equalsFunc()
    }
    if (anyFunctions.includes(el.target.value)) {
      return anyFunc(el.target.value);
    }
    if (singFirstСondition | singSecondCondition) {
      return;
    }
    if (signsArr.includes(el.target.value)) {
      return signsFunc(el.target.value);
    }
  };
});

function signsFunc(num) {
  input.value = input.value + num;
}

function anyFunc(num) {
  if (num === "с") {
    return (input.value = input.value.slice(0, -1));
  }
  if (num === "a/c") {
    return (input.value = "");
  }
  if (num === "%") {
    let preResult = input.value.replace(/[A-Z]/gi, "");
    preResult = preResult.replace(/[А-Я]/gi, "");
    let result = eval(preResult);
    result = result * 0.01;
    input.value = result;
  }
}

function numFunc(num) {
  input.value = input.value + num;
}

function equalsFunc() {
  let preResult = input.value.replace(/[A-Z]/gi, "");
  preResult = preResult.replace(/[А-Я]/gi, "");
  // signsArr.forEach(function(el){
  //   preResult = preResult.replace(/elel/gi, "");
  // })
  let result = eval(preResult);
  if (!Number.isInteger(result)) {
    result = result.toFixed(4);
    result = parseFloat(result);
  }
  createHistory(`${preResult} = ${result}`);
  input.value = result;
}
//пересчет из милисекунд
//или возврат значений

let today = new Date();
let hour = today.getHours();
let minutes = today.getMinutes();
let day = today.getDay();
let mounth = today.getMonth();
let year = today.getFullYear();
let seconds = today.getSeconds();


function refreshData() {
  hour = today.getHours();
  minutes = today.getMinutes();
  day = today.getDate();
  mounth = today.getMonth() + 1;
  year = today.getFullYear();
  seconds = today.getSeconds();
  if(seconds < 10){
    seconds.toString();
    seconds = "0" + seconds;
  }
  if (hour < 10) {
    hour.toString();
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes.toString();
    minutes = "0" + minutes;
  }
  if (mounth < 10) {
    mounth.toString();
    mounth = "0" + mounth;
  }
  if (day < 10) {
    day.toString();
    day = "0" + day;
  }
}
// востановление
const lists = document.querySelector(".lists");
// не [] а ''
let historyArr = JSON.parse(localStorage.getItem("historyArr")) || [];
// ?
if (!historyArr == []) {
  historyArr.forEach(function (item) {
    let char = localStorage.getItem(item);
    let historyItem = document.createElement("li");
    historyItem.setAttribute("class", "item");
    // не используется
    refreshData();
    historyItem.textContent = `${char}`;
    checkHistory();
    lists.append(historyItem);
  });
}

function createHistory(item) {
  let historyItem = document.createElement("li");
  historyItem.setAttribute("class", "item");
  refreshData();
  historyItem.textContent = `${item}, ${hour}:${minutes}:${seconds}, ${year}.${mounth}.${day}`;
  let idTime = new Date();
  let id = idTime.getTime();
  localStorage.setItem(id, historyItem.textContent);
  historyArr.push(id);
  localStorage.setItem("historyArr", JSON.stringify(historyArr));
  checkHistory();
  // добавление спереди
  lists.insertAdjacentElement("afterbegin", historyItem)
}

const itemsList = document.querySelector(".lists");
itemsList.onclick = function () {
  document.querySelectorAll(".item").forEach(function (el) {
    el.onclick = function () {
      historyArr.forEach(function (item) {
        if (localStorage.getItem(item) === el.textContent) {
          let index = historyArr.indexOf(item);
          historyArr = historyArr.splice(index + 1, 1);
          // ошибка при удалении 1 элемента
          localStorage.setItem("historyArr", JSON.stringify(historyArr));
          localStorage.removeItem(item);
        }
      });
      checkHistory();
      el.remove();
    };
  });
};
// смысл?
function checkHistory() {
  if (historyArr.length > 13) {
    document.querySelector("#main").classList.toggle(".positionAbsulute");
  }
}

const spy = document
  .querySelector("#main")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      equalsFunc(input.value);
    }
  });
