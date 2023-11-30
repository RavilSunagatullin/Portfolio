const loginEl = document.querySelector("#login");
const passwordEl = document.querySelector("#password");
const submitEl = document.querySelector("#submit");

document.querySelector("#form").addEventListener("submit", function () {
  localStorage.setItem("form-login", loginEl.value);
  localStorage.setItem("form-password", passwordEl.value);
});
