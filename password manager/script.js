const app = document.querySelector("#app");
app.innerHTML = `<header>
<button id="create-btn">создать</button>
</header>
<main class="main"> </main>
<dialog id="createPopup">
<button onclick="createPopup.close()">закрыть</button>
<form method="dialog" id="create-form">
    <div class="form__elem">
        <label for="url">url</label>
        <input type="text" id="url" />
    </div>
    <div class="form__elem">
        <label for="url">login</label>
        <input type="text" id="login" />
    </div>
    <div class="form__elem">
        <label for="url">password</label>
        <input type="text" id="password" />
    </div>
    <button type="submit" id="create-form-btn">создать</button>
</form>
</dialog>
<dialog id="editPopup">
<button onclick="editPopup.close()">закрыть</button>
<form method="dialog" id="edit-form">
    <div class="form__elem">
        <label for="editUrl">url</label>
        <input id="editUrl" type="text" value="http::/rfsd" />
    </div>
    <div class="form__elem">
        <label for="editLogin">login</label>
        <input id="editLogin" type="text" value="nrugnsdf" />
    </div>
    <div class="form__elem">
        <label for="editPassword">password</label>
        <input id="editPassword" type="text" value="1231231" />
    </div>
    <button type="submit" id="create-form-btn">edit</button>
</form>
</dialog>`;

let passwordsInfo = JSON.parse(localStorage.getItem("passwordsInfo")) || [];
createCrads();
// let passwordsInfo = [
//     {
//         'url':'https://',
//         'login':'login',
//         'password':'123'
//     },
// ]

function createCrads() {
    document.querySelector("main").innerHTML = "";
    passwordsInfo.forEach((element) => {
        createCard(element.url, element.login, atob(element.password));
    });
}
function createCard(url, login, password) {
    let maskedPassword = password.replace(/./g, "*");
    let node = document.createElement("div");
    node.setAttribute("class", "card");
    node.innerHTML = ` 
    <div class="card__info">
    <div class="card__element">
        <p class="card__text">login: <span>${login}</span></p>
        <button class="card__button" onclick="copy('${login}')">copy</button></div>
    <div class="card__element">
        <p class="card__text">password: <span>${maskedPassword}</span></p>
        <button class="card__button" onclick="copy('${password}')">copy</button>
    </div>
    <div class="card__element">
        <a class="card__text" href="${url}" target="_blank">url: <span>${url}</span></a>
        <button class="card__button" onclick="copy('${url}')">copy</button>
    </div>
</div>
<div class="card__actions">
    <button class="card__button edit" onclick="openEditPopup('${url}', '${login}', '${password}')">изменить</button>
    <button class="card__button delete" onclick="deleteCard('${url}', '${login}', '${password}')">удалить</button>
</div>
    `;
    document.querySelector("main").append(node);
}
function saveCard(url, login, password) {
    passwordsInfo.push({
        url: url,
        login: login,
        password: btoa(password),
    });
    localStorage.setItem("passwordsInfo", JSON.stringify(passwordsInfo));
}
function updateCards(url, login, password, urlUpd, loginUpd, passwordUpd) {
    let updatedData = {
        url: urlUpd,
        login: loginUpd,
        password: btoa(passwordUpd),
    };
    let index = passwordsInfo.findIndex((item) => {
        return item.login === login && item.url === url;
    });
    if (index !== -1) {
        passwordsInfo[index] = updatedData;
    }
    localStorage.setItem("passwordsInfo", JSON.stringify(passwordsInfo));
    createCrads();
}
document.querySelector("#create-btn").onclick = () => {
    document.querySelector("#createPopup").showModal();
};
document.querySelector("#create-form").onsubmit = () => {
    let url = document.querySelector("#url").value;
    let login = document.querySelector("#login").value;
    let password = document.querySelector("#password").value;
    createCard(url, login, password);
    saveCard(url, login, password);
};
function openEditPopup(url, login, password) {
    document.querySelector("#editUrl").value = url;
    document.querySelector("#editLogin").value = login;
    document.querySelector("#editPassword").value = password;
    document.querySelector("#editPopup").showModal();
    updateEditPopup(url, login, password);
}
function updateEditPopup(url, login, password) {
    document.querySelector("#edit-form").onsubmit = () => {
        let urlUpd = document.querySelector("#editUrl").value;
        let loginUpd = document.querySelector("#editLogin").value;
        let passwordUpd = document.querySelector("#editPassword").value;
        updateCards(url, login, password, urlUpd, loginUpd, passwordUpd);
    };
}
function deleteCard(url, login, password) {
    let index = passwordsInfo.findIndex((item) => {
        return item.login === login && item.url === url;
    });
    if (index !== -1) {
        passwordsInfo.splice(index, 1);
    }
    localStorage.setItem("passwordsInfo", JSON.stringify(passwordsInfo));
    createCrads();
}
function copy(text) {
    navigator.clipboard.writeText(text);
}
