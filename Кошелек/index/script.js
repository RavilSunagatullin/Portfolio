//  auth
let login = localStorage.getItem("login");
let password = localStorage.getItem("password");
let is_auth = false;
let formPassword = localStorage.getItem("form-password");
let formLogin = localStorage.getItem("form-login");
if (localStorage.getItem("password") == null) {
  password = "0000";
}
if (localStorage.getItem("login") == null) {
  login = "login";
}
if (password == formPassword && login == formLogin) {
  is_auth = true;
}

const loginTitle = document.querySelector("#loginTitle");
const passwordTitle = document.querySelector("#passwordTitle");
const authFalse = document.querySelector(".auth-false");
const authTrue = document.querySelector(".auth-true");
const balanceTag = document.querySelector("#balance");

if (is_auth) {
  passwordTitle.textContent = `Пароль: ${password}`;
  loginTitle.textContent = `Логин: ${login}`;
  authFalse.classList.add("d-none");
} else {
  authTrue.classList.add("d-none");
}

const format = new Intl.NumberFormat("ru-RU");
if (localStorage.getItem("balance") != null) {
  balanceTag.textContent = localStorage.getItem("balance");
} else {
  balanceTag.textContent = new Intl.NumberFormat("ru-RU").format(0);
}
// end auth

// Password
const updatePassword = document.querySelector("#updatePassword");
const confirmPassword = document.querySelector("#confirmPassword");
const updateBtn = document.querySelector("#updatePasswordBtn");
const confirmAlarm = document.querySelector("#confirmAlarm");
const updateAlarm = document.querySelector("#updateAlarm");

updateBtn.onclick = function () {
  if (updatePassword.value == confirmPassword.value) {
    confirmAlarm.classList.add("d-none");
    updateAlarm.classList.remove("d-none");
    localStorage.setItem("password", updatePassword.value);
    passwordTitle.textContent = `Password: ${updatePassword.value}`;
  } else {
    confirmAlarm.classList.remove("d-none");
    updateAlarm.classList.add("d-none");
  }
};
// End password

// Category
const categoryTitle = document.querySelector("#categoryTitle");
const categoriesList = document.querySelector("#categories");

let localCategories = localStorage.getItem("localCategories") || "";

let ActiveCategories = localStorage.getItem("ActiveCategories") || "";
let AllCategories = [];

if (localCategories != "") {
  let localCategoriesArr = localCategories.split(",").forEach(function (el) {
    if (el == "") {
      return;
    }
    let categoryList = document.createElement("li");
    categoryList.innerHTML = `<label for="${el}" class="checkbox-label">
      <input id="${el}" type="checkbox" class="checkbox" value="${el}"/>
      <span class="check-style"></span>
      ${el}
      <div><svg class="svg svg-categories" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></div>
    </label>`;
    categoriesList.append(categoryList);
  });
  if (ActiveCategories.length != 0) {
    ActiveCategories.split(",").forEach(function (el) {
      document.querySelector(`#${el}`).setAttribute("checked", true);
    });
  }
  restoreCategory();
}

categoryBtn.onclick = function () {
  if (/\d/.test(categoryTitle.value)) {
    return alert("Удалите цифры из название категории");
  }
  if (categoryTitle.value == "") {
    return;
  }
  if (localCategories == "") {
    localCategories += categoryTitle.value;
  } else {
    localCategories += "," + categoryTitle.value;
  }
  localCategories = localCategories.replace(",,", ",");
  localStorage.setItem("localCategories", localCategories);
  location.reload();
};
let svg = document.querySelectorAll(".svg-categories");
deleteCategories(svg);

function deleteCategories(svg) {
  svg.forEach(function (el) {
    el.onclick = function (item) {
      let some = el.parentNode.parentNode.textContent;
      some = some.trim();
      localCategories.split(",").forEach(function (el) {
        if (some == el) {
          localCategories = localCategories.replace(el, "");
          localCategories = localCategories.replace(",,", ",");
          ActiveCategories = ActiveCategories.replace(el, "");
          ActiveCategories = ActiveCategories.replace(",,", ",");
          if (ActiveCategories[0] == ",") {
            ActiveCategories = ActiveCategories.slice(1);
          }
        }
        if (localCategories[0] == ",") {
          localCategories = localCategories.slice(1);
        }
      });

      el.parentNode.parentNode.parentNode.remove();
      incomeCategory();
      expenseCategory();
      localStorage.setItem("ActiveCategories", ActiveCategories);
      localStorage.setItem("localCategories", localCategories);
    };
  });
}
function restoreCategory() {
  if (localCategories != "") {
    AllCategories = localCategories.split(",").forEach(function (el) {
      if (el == "") {
        return;
      }
      document.querySelector(`#${el}`).addEventListener("input", function () {
        if (!ActiveCategories.includes(el)) {
          if (ActiveCategories == "") {
            ActiveCategories += el;
          } else {
            ActiveCategories += `,${el}`;
          }
          ActiveCategories = ActiveCategories.replace(",,", ",");
          localStorage.setItem("ActiveCategories", ActiveCategories);
          document.querySelectorAll(".income-svg").forEach(function (el) {
            el.parentNode.parentNode.remove();
          });
          document.querySelectorAll(".expense-svg").forEach(function (el) {
            el.parentNode.parentNode.remove();
          });
          restoreIncomes();
          deleteIncomes();
          restoreExpenses();
          deleteExpenses()
        } else {
          ActiveCategories = ActiveCategories.replace(el, "");
          ActiveCategories = ActiveCategories.replace(",,", ",");
          if (ActiveCategories[0] == ",") {
            ActiveCategories = ActiveCategories.slice(1);
          }
          localStorage.setItem("ActiveCategories", ActiveCategories);
          document.querySelectorAll(".income-svg").forEach(function (el) {
            el.parentNode.parentNode.remove();
          });
          document.querySelectorAll(".expense-svg").forEach(function (el) {
            el.parentNode.parentNode.remove();
          });
          restoreIncomes();
          deleteIncomes();
          restoreExpenses();
          deleteExpenses()
        }
      });
    });
  }
}

// End category

// Incomes
const form = document.querySelector("#form");

const incomeSum = document.querySelector("#incomeSum");
const incomeTitle = document.querySelector("#incomeTitle");
const incomeData = document.querySelector("#incomeData");
const incomeSelect = document.querySelector("#incomeSelect");
const incomeBtn = document.querySelector("#incomeBtn");
const incomesList = document.querySelector("#incomes");

incomeData.value = new Date().toISOString().substring(0, 10);

let localIncomes = localStorage.getItem("localIncomes") || "";
function restoreIncomes() {
  let i = 1;
  localIncomes.split("/").forEach(function (el) {
    let incomeList = document.createElement("li");
    incomeList.setAttribute("class", "list");
    let resultList = "";
    el.split(",").forEach(function (elem) {
      if (i == 1) {
        incomeList.textContent = `Загаловок: ${elem}`;
        resultList = incomeList.textContent + ", ";
      } else if (i == 2) {
        incomeList.textContent = `сумма: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else if (i == 3) {
        incomeList.textContent = `дата: ${elem}`;
        resultList = resultList + incomeList.textContent + ", ";
      } else {
        if (
          localStorage.getItem("ActiveCategories") == "" ||
          localStorage.getItem("ActiveCategories") == null
        ) {
          incomeList.textContent = `категория: ${elem}`;
          resultList = resultList + incomeList.textContent + " ";
          i = 0;
          incomeList.textContent = resultList;
          let trash = document.createElement("div");
          trash.innerHTML =
            '<svg class="green-svg income-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
          incomeList.append(trash);
          incomesList.append(incomeList);
        } else if (
          localStorage.getItem("ActiveCategories").includes(elem) &&
          elem != ""
        ) {
          incomeList.textContent = `категория: ${elem}`;
          resultList = resultList + incomeList.textContent + " ";
          i = 0;
          incomeList.textContent = resultList;
          let trash = document.createElement("div");
          trash.innerHTML =
            '<svg class="green-svg income-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
          incomeList.append(trash);
          incomesList.append(incomeList);
        } else {
          incomeList.textContent = "";
          resultList = "";
          i = 0;
        }
      }
      i++;
    });
  });
}
if (localIncomes != "") {
  restoreIncomes();
}
function incomeCategory() {
  if (localCategories != "") {
    incomeSelect.innerHTML = "";
    let localCategoriesArr = localCategories.split(",").forEach(function (el) {
      let categoryList = document.createElement("option");
      categoryList.setAttribute("class", "option");
      categoryList.setAttribute("value", el);
      categoryList.textContent = `${el}`;
      incomeSelect.append(categoryList);
    });
  }
}
incomeCategory();

incomeBtn.onclick = function () {
  balanceTag.textContent = balanceTag.textContent.replace(/\s/g, "");
  balanceTag.textContent = new Intl.NumberFormat("ru-RU").format(
    Number(balanceTag.textContent) + Number(incomeSum.value)
  );
  localStorage.setItem("balance", balanceTag.textContent);
  if (incomeSelect.value == "") {
    return alert("Задайте категорию");
  }
  if (incomeTitle.value == "") {
    return alert("Введите название");
  }
  if (incomeSum.value == "") {
    return alert("Введите сумму");
  }
  if (incomeData.value == "") {
    return alert("Введите дату");
  }

  localIncomes += `/${incomeTitle.value},${incomeSum.value},${incomeData.value},${incomeSelect.value}/`;
  localIncomes = localIncomes.replace("//", "/");
  if (localIncomes[0] == "/") {
    localIncomes = localIncomes.slice(1);
  }
  localStorage.setItem("localIncomes", localIncomes);
  location.reload();
};

function deleteIncomes() {
  document.querySelectorAll(".income-svg").forEach(function (el) {
    el.onclick = function () {
      let Node = el.parentNode.parentNode;
      Node.textContent = Node.textContent.replace("Загаловок: ", "");
      Node.textContent = Node.textContent.replace(" сумма: ", "");
      Node.textContent = Node.textContent.replace(" дата: ", "");
      Node.textContent = Node.textContent.replace(" категория: ", "");
      Node.textContent = Node.textContent.slice(0, -1);
      localIncomes.split("/").forEach(function (elem) {
        if (Node.textContent == elem) {
          localIncomes = localIncomes.replace(elem, "");
          localIncomes = localIncomes.replace("//", "/");
          if (localIncomes[0] == "/") {
            localIncomes = localIncomes.slice(1, -1);
          }
          localStorage.setItem("localIncomes", localIncomes);
        }
      });
      Node.remove();
    };
  });
}
deleteIncomes();
// end incomes

// expenses
const expenseSum = document.querySelector("#expenseSum");
const expenseTitle = document.querySelector("#expenseTitle");
const expenseData = document.querySelector("#expenseData");
const expenseSelect = document.querySelector("#expenseSelect");
const expenseBtn = document.querySelector("#expenseBtn");
const expensesList = document.querySelector("#expenses");

expenseData.value = new Date().toISOString().substring(0, 10);

let localExpenses = localStorage.getItem("localExpenses") || "";
function restoreExpenses() {
  let i = 1;
  localExpenses.split("/").forEach(function (el) {
    let expenseList = document.createElement("li");
    expenseList.setAttribute("class", "list");
    let resultList = "";
    el.split(",").forEach(function (elem) {
      if (i == 1) {
        expenseList.textContent = `Загаловок: ${elem}`;
        resultList = expenseList.textContent + ", ";
      } else if (i == 2) {
        expenseList.textContent = `сумма: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else if (i == 3) {
        expenseList.textContent = `дата: ${elem}`;
        resultList = resultList + expenseList.textContent + ", ";
      } else {
        if (
          localStorage.getItem("ActiveCategories") == "" ||
          localStorage.getItem("ActiveCategories") == null
        ) {
          expenseList.textContent = `категория: ${elem}`;
          resultList = resultList + expenseList.textContent + " ";
          i = 0;
          expenseList.textContent = resultList;
          let trash = document.createElement("div");
          trash.innerHTML =
            '<svg class="red-svg expense-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
          expenseList.append(trash);
          expensesList.append(expenseList);
        } else if (
          localStorage.getItem("ActiveCategories").includes(elem) &&
          elem != ""
        ) {
          expenseList.textContent = `категория: ${elem}`;
          resultList = resultList + expenseList.textContent + " ";
          i = 0;
          expenseList.textContent = resultList;
          let trash = document.createElement("div");
          trash.innerHTML =
            '<svg class="red-svg expense-svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 448 512"><path fill="#efefef" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
          expenseList.append(trash);
          expensesList.append(expenseList);
        } else {
          expenseList.textContent = "";
          resultList = "";
          i = 0;
        }
      }
      i++;
    });
  });
}
if (localExpenses != "") {
  restoreExpenses();
}

function expenseCategory() {
  if (localCategories != "") {
    expenseSelect.innerHTML = "";
    let localCategoriesArr = localCategories.split(",").forEach(function (el) {
      let categoryList = document.createElement("option");
      categoryList.setAttribute("class", "option");
      categoryList.setAttribute("value", el);
      categoryList.textContent = `${el}`;
      expenseSelect.append(categoryList);
    });
  }
}
expenseCategory();

expenseBtn.onclick = function () {
  balanceTag.textContent = balanceTag.textContent.replace(/\s/g, "");
  console.log(balanceTag.textContent);
  balanceTag.textContent = new Intl.NumberFormat("ru-RU").format(
    Number(balanceTag.textContent) - Number(expenseSum.value)
  );
  localStorage.setItem("balance", balanceTag.textContent);
  if (expenseSelect.value == "") {
    return alert("Задайте категорию");
  }
  if (expenseTitle.value == "") {
    return alert("Введите название");
  }
  if (expenseSum.value == "") {
    return alert("Введите сумму");
  }
  if (expenseData.value == "") {
    return alert("Введите дату");
  }
  localExpenses += `/${expenseTitle.value},${expenseSum.value},${expenseData.value},${expenseSelect.value}/`;
  localExpenses = localExpenses.replace("//", "/");
  if (localExpenses[0] == "/") {
    localExpenses = localExpenses.slice(1);
  }
  localStorage.setItem("localExpenses", localExpenses);
  location.reload();
};
function deleteExpenses() {
  document.querySelectorAll(".expense-svg").forEach(function (el) {
    el.onclick = function () {
      let Node = el.parentNode.parentNode;
      Node.textContent = Node.textContent.replace("Загаловок: ", "");
      Node.textContent = Node.textContent.replace(" сумма: ", "");
      Node.textContent = Node.textContent.replace(" дата: ", "");
      Node.textContent = Node.textContent.replace(" категория: ", "");
      Node.textContent = Node.textContent.slice(0, -1);
      localExpenses.split("/").forEach(function (elem) {
        if (Node.textContent == elem) {
          localExpenses = localExpenses.replace(elem, "");
          localExpenses = localExpenses.replace("//", "/");
          if (localExpenses[0] == "/") {
            localExpenses = localExpenses.slice(1, -1);
          }
          localStorage.setItem("localExpenses", localExpenses);
        }
        Node.remove();
      });
    };
  });
}
deleteExpenses()
// end expenses
