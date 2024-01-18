// const studentEmail = "student@yandex.ru";
// fetch(
//   `https://api-code.practicum-team.ru/heroes?_where[_or][0][studentEmail]=${studentEmail}&_where[_or][1][studentEmail]=`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // В консоли можно исследовать полученные данные
//     cards = data; // Запишем данные в переменную
//     // renderCards(cards); // Функция отрисовки полученных данных
//   })
//   .catch((error) => console.error("Ошибка:", error));

// P.S
// Надеюсь много переделывать на следуюшей неделе не будет
// тк я чет увлекся и наделал лишнего
// плюс могут появится проблемы в онлайне(2 человека удалят 1 и туже карточку)
// а так же я не представляю как работает с онлайн, и что там нужно
// и в полне вероятно то что я сделал схлопнется

// Получение нужных нод
const nameInput = document.querySelector("#heroName");
const classInput = document.querySelector("#heroClass");
const imgInput = document.querySelector("#heroUrl");
const heroesContainer = document.querySelector("#heroesContainer");

// Убрал перезагрузку страницы при отправке формы
const form = document.querySelector("#form");
form.onsubmit = (event) => {
  event.preventDefault();
};

// Скрытие и раскрытие формы
const hideBtn = (document.querySelector("#hideBtn").onclick = () => {
  form.classList.toggle("hide");
});

// получение данных о предыдуших сессиях или стандартные значения
// не бейте палками, объекты мне показались удобнее
let heroes = JSON.parse(localStorage.getItem("heroes")) || [
  {
    // магическая битва
    name: "Gojo Satoru",
    class: "Special Rank Spellcaster",
    img: "https://steamuserimages-a.akamaihd.net/ugc/1754695472804333066/5A0B0134BBFD81C78681D92D96FBF589CA06156A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
  },
  {
    // магическая битва
    name: "Ryomen Sukuna",
    class: "King of Curses",
    img: "https://preview.redd.it/ryomen-sukuna-colored-by-me-v0-27e4bjwukcub1.png?width=1080&crop=smart&auto=webp&s=1717c3ae1f2c20da07d868e98c1b750564800abc",
  },
  {
    // магическая битва
    name: "Kento Nanami",
    class: "1st level mage.",
    img: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/11/jjk-does-nanami-die.png",
  },
  {
    // атака титанов
    name: "Levi Ackerman",
    class: "Humanity's Strongest Soldier",
    img: "https://img.asmedia.epimg.net/resizer/uitWqP5D3lW3gbLMqO39S5f0q5Q=/1288x725/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HBQZJU3D55AKHDANAGVYR7ZEVQ.png",
  },
  {
    // реинкорнация безработного
    name: "Rudeus Greyrat",
    class: "Rudeus of the Swamp",
    img: "https://jonahwritesdotblog.files.wordpress.com/2023/09/screenshot-283.png?w=746",
  },
  {
    // тетрадь смерти
    name: "Yagami Light",
    class: "God of the New World",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg",
  },
];

// добавление элементов на страницу
heroes.forEach((hero) => {
  displayHeroes(hero.name, hero.class, hero.img);
});

function displayHeroes(heroName, heroClass, heroImg) {
  //создание необхлдимых нод
  let heroDiv = document.createElement("div");
  heroDiv.setAttribute("class", "card");
  let cardInfo = createCardInfo(
    createHeroTitle(heroName),
    createHeroDescription(heroClass)
  );
  let heroPhoto = createHeroImg(heroImg);
  //отрисовка
  heroDiv.append(cardInfo, heroPhoto);
  heroesContainer.appendChild(heroDiv);
}
// создание заголовка карточки
function createHeroTitle(heroName) {
  const heroTitle = document.createElement("h3");
  heroTitle.textContent = heroName;
  return heroTitle;
}
// создание описания
function createHeroDescription(heroClass) {
  const heroDescription = document.createElement("p");
  heroDescription.textContent = heroClass;
  return heroDescription;
}
// объединение описания и заголовка + кнопка удаления
function createCardInfo(titleNode, descriptionNode) {
  let cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info");
  cardInfo.innerHTML =
    '<svg class="bin-icon" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/></g></svg>';
  cardInfo.append(titleNode, descriptionNode);
  return cardInfo;
}
// добавление картинки
// хотел изначально файлом, но чет сложно было и решил через url картинки
// тк надо скачать асинхронно и как-то добавить
function createHeroImg(heroImg, heroName) {
  const heroPhoto = document.createElement("img");
  heroPhoto.setAttribute("class", "card__img");
  heroPhoto.setAttribute("src", heroImg);
  heroPhoto.setAttribute("alt", heroName);
  return heroPhoto;
}
// создание новой карточки
document.getElementById("addButton").onclick = () => {
  // сохранение
  let newHero = {
    name: nameInput.value,
    class: classInput.value,
    img: imgInput.value,
  };
  heroes.push(newHero);
  localStorage.setItem("heroes", JSON.stringify(heroes));
  //отрисовка
  displayHeroes(nameInput.value, classInput.value, imgInput.value);
  classInput();
};
// очистка инпутов
function clearInput() {
  nameInput.value = "";
  classInput.value = "";
  imgInput.value = "";
}
// удаление карточки
// пришлось костылить( и копаться в ивенте
// есть ли другие способы?
heroesContainer.onclick = (event) => {
  if (event.target.nodeName === "svg") {
    let parent = event.target.parentNode.parentNode;
    let textId = event.srcElement.parentElement.innerText;
    deleteHero(textId, parent);
  }
};
// вынес для переиспользования (когда-нибудь)
function deleteHero(id, parent) {
  heroes.forEach((hero) => {
    // немного костылей(
    // тк id это текст контент card-info и в консоли с 2 enter`ми
    heroText = `${hero.name}\n\n${hero.class}`;
    if (heroText === id) {
      //мутации это вроде плохо, однако лучше не придумал
      heroes = heroes.filter((elem) => elem != hero);
      localStorage.setItem("heroes", JSON.stringify(heroes));
      parent.remove();
    }
  });
}
