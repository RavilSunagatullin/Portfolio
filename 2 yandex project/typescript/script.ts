// Документацию писал ChatGPT 3.5

// Todo:
// Включать и выключать доп умение в зависимости от формы
// Включать музыку при победе
// Попробавть настроить стили у иконок автозаполнения формы

// P.S.
// Этот код, перенесенный на ts код с практикума
// Поэтому фишки ts не все использовал
// Да и я в первый раз пишу что-то сложнее функции sum(a + b)
// От себя, если есть косяки или замечания можно где-нибудь оставить номера строк чтоб потом разобраться и исправить 
// Извиняюсь что вышло на 700+ строк (но тут половина это текст)

// Находим кнопку с классом "dev-tools__button" и сохраняем ее в переменной devToolsButton
const devToolsButton: HTMLElement | null =
  document.querySelector(".dev-tools__button");
const overlay = document.getElementById("overlay")!;
// Находим элемент с классом "dev-tools" и сохраняем его в переменной consoleBoard
const consoleBoard: HTMLElement | null = document.querySelector(".dev-tools");

// Добавляем обработчик события "click" для элемента devToolsButton
devToolsButton?.addEventListener("click", () => {
  // Переключаем класс "hide" у элемента consoleBoard при каждом клике на devToolsButton
  overlay.classList.toggle("d-block");
  consoleBoard?.classList.toggle("hide");
});
overlay?.addEventListener("click", () => {
  overlay.classList.toggle("d-block");
  consoleBoard?.classList.toggle("hide");
});

// Объявляем объект gameParameters, содержащий константы игры
const gameParameters = {
  // Максимальный уровень
  MAX_LEVEL: 30,
  // Максимальное значение статистики
  MAX_STAT: 99,
  // Минимальное значение статистики
  MIN_STAT: 1,
};

// Определяем пользовательский тип Classes, представляющий объект, где ключи (строки) - названия классов, а значения (строки) - их описания
type Classes = {
  [key: string]: string;
};

// Объект gameClasses представляет собой коллекцию игровых классов с их описаниями
const gameClasses: Classes = {
  Mage: "Маг", // Класс "Mage" представляет мага
  Knight: "Рыцарь", // Класс "Knight" представляет рыцаря
  Hero: "Класс", // Класс "Hero" представляет общий класс
};

/**
 * Функция writeToConsole
 * Выводит сообщение в "консоль" разработчика.
 * @param message - Строка сообщения или объект Message.
 * @returns void
 */
type Message = {
  [key: string]: any;
};
function writeToConsole(message: string | Message): void {
  // Находим элемент с классом "dev-tools__text" для вывода сообщений
  const consoleOutput = document.querySelector(".dev-tools__text");

  // Проверяем, был ли найден элемент
  if (!consoleOutput) {
    console.error("Элемент с идентификатором 'console-output' не найден.");
    return;
  }

  try {
    let formattedMessage: string;

    // Если сообщение является объектом, преобразуем его в строку с обработкой циклических ссылок
    if (typeof message === "object") {
      formattedMessage = JSON.stringify(
        message,
        function (key, value) {
          return value;
        },
        5
      );
    } else {
      formattedMessage = message;
    }

    // Обновляем содержимое тега <p> с новым сообщением
    consoleOutput.innerHTML += formattedMessage + "<br>";
  } catch (error: unknown) {
    // Обрабатываем ошибку, если она произошла в блоке try
    if (error instanceof Error) {
      console.error("Ошибка при обработке сообщения:", error.message);
    }
  }
}

/**
 * Тип heroParams представляет параметры героя.
 * @property name - Имя героя.
 * @property level - Уровень героя.
 * @property healthPoints - Жизненные силы героя.
 * @property stats - Объект с параметрами героя.
 */
type HeroParams = {
  name: string;
  level: number;
  healthPoints: number;
  stats: {
    [key: string]: number;
  };
};

/**
 * Класс Hero представляет базового героя в игре.
 * @property name - Имя героя.
 * @property level - Уровень героя.
 * @property healthPoints - Жизненные силы героя.
 * @property stats - Объект с параметрами героя.
 * @method displayHero - Метод для вывода информации о герое в "консоль".
 */
class Hero {
  name: string;
  level: number;
  healthPoints: number;
  stats: {
    [key: string]: number;
  };

  // Конструктор базового класса
  constructor({ name, level, healthPoints, stats }: HeroParams) {
    this.name = name; // Имя
    this.level = level; // Уровень
    this.healthPoints = healthPoints; // Жизненные силы
    this.stats = stats; // Параметры
  }

  // Метод, отвечающий за вывод информации о герое в консоль
  displayHero() {
    const heroInfo =
      `<br>` +
      `Имя: ${this.name}` +
      `<br>` +
      `\nУровень: ${this.level}` +
      `<br>` +
      `\nЖизненные силы: ${this.healthPoints}` +
      `<br>` +
      `\nСила: ${this.stats.str}` +
      `<br>` +
      `\nИнтеллект: ${this.stats.int}` +
      `<br>` +
      `\nЛовкость: ${this.stats.agi}`;

    writeToConsole(heroInfo);
  }
}

/**
 * Класс Mage представляет героя-мага в игре, расширяющего базовый класс Hero.
 * @property hasTectonicPotion - Наличие зелья для тектоника.
 * @property mana - Уровень маны мага.
 * @method displayHero - Расширение метода базового класса для вывода информации о маге в консоль.
 */
class Mage extends Hero {
  hasTectonicPotion: boolean;
  mana: number;

  // Конструктор дочернего класса
  constructor(
    { name, level, healthPoints, stats }: HeroParams,
    hasTectonicPotion: boolean,
    mana: number
  ) {
    super({ name, level, healthPoints, stats });
    this.hasTectonicPotion = hasTectonicPotion; // Зелье для тектоника
    this.mana = mana; // Мана мага
  }

  // Метод, расширяющий метод базового класса
  displayHero() {
    super.displayHero();

    writeToConsole(`Мана: ${this.mana}`);
    if (this.hasTectonicPotion === true) {
      writeToConsole("Есть зелье для тектоника");
    }
  }
}

/**
 * Класс Knight представляет героя-рыцаря в игре, расширяющего базовый класс Hero.
 * @property isHorseTango - Возможность танцевать танго на коне.
 * @property energy - Уровень энергии рыцаря.
 * @method displayHero - Расширение метода базового класса для вывода информации о рыцаре в консоль.
 */
class Knight extends Hero {
  isHorseTango: boolean;
  energy: number;

  // Конструктор дочернего класса
  constructor(
    { name, level, healthPoints, stats }: HeroParams,
    isHorseTango: boolean,
    energy: number
  ) {
    super({ name, level, healthPoints, stats });
    this.isHorseTango = isHorseTango; // Может танцевать танго на коне

    // Показатель усталости героя,
    // где 1 - герой не устал, gameParameters.MAX_STAT - герой устал и не может делиться защитой
    this.energy = energy;
  }

  // Метод, расширяющий метод базового класса
  displayHero() {
    super.displayHero();

    writeToConsole(`Энергия: ${this.energy}`);

    if (this.isHorseTango === true) {
      writeToConsole("Этот герой может танцевать танго на коне");
    }
  }
}

// Герой игрока: экземпляр класса Mage или Knight, либо null.
let playerHero: Mage | Knight | null = null;

// Герой противника: экземпляр базового класса Hero, либо null.
let enemyHero: Hero | null = null;

// Кнопка отправки героя в бой.
const sendToBattleButton = document.getElementById("sendToBattleButton");

// Кнопка получения противника.
const getEnemyButton = document.getElementById("getEnemyButton");

// Кнопка использования умения.
const doSkillButton = document.getElementById("doSkillButton");

doSkillButton?.addEventListener("click", () => {
  if (playerHero === null) {
    return;
  }
  if (playerHero instanceof Mage) {
    playerHero.stats.int += 10;
  }
  if (playerHero instanceof Knight) {
    playerHero.stats.str += 10;
  }
  displayPlayerHero(playerHero);
  writeToConsole(`${playerHero.name} использует доп уммение`);
  doSkillButton?.setAttribute("disabled", "disabled");
});

// Кнопка начала боя.
const startBattleButton = document.getElementById("startBattleButton");

/**
 * Обработчик события click для кнопки отправки героя игрока в бой.
 */
sendToBattleButton?.addEventListener("click", () => {
  // Получение информации о герое игрока из введенных данных
  const heroName = (<HTMLInputElement>document.getElementById("name")).value;
  if (heroName !== "") {
    const heroClass = (<HTMLInputElement>(
      document.querySelector('input[name="class"]:checked')
    )).value;
    const heroLevel = Number(
      (<HTMLInputElement>document.getElementById("level")).value
    );

    const additionalAbility = Boolean(
      (<HTMLInputElement>(
        document.querySelector('input[name="additionalAbility"]:checked')
      )).value
    );

    const additionalStat = Number(
      (<HTMLInputElement>document.getElementById("additionalStat")).value
    );

    // Определение типа для хранения статистики героя
    type HeroStats = { str: number; int: number; agi: number };

    // Инициализация объекта с статистикой героя
    const heroStats: HeroStats = {
      str: 0,
      int: 0,
      agi: 0,
    };

    // Заполнение статистики героя
    heroStats.str = Number(
      (<HTMLInputElement>document.getElementById("strength")).value
    );
    if (heroStats.str > gameParameters.MAX_STAT) {
      heroStats.str = gameParameters.MAX_STAT;
    }
    heroStats.int = Number(
      (<HTMLInputElement>document.getElementById("intelligence")).value
    );
    if (heroStats.int > gameParameters.MAX_STAT) {
      heroStats.int = gameParameters.MAX_STAT;
    }
    heroStats.agi = Number(
      (<HTMLInputElement>document.getElementById("agility")).value
    );
    if (heroStats.agi > gameParameters.MAX_STAT) {
      heroStats.agi = gameParameters.MAX_STAT;
    }

    // Создание объекта параметров героя
    let heroParams: HeroParams = {
      name: heroName,
      level: heroLevel,
      healthPoints: 100,
      stats: heroStats,
    };

    // Создание экземпляра героя в зависимости от выбранного класса
    if (heroClass === "Mage") {
      playerHero = new Mage(heroParams, additionalAbility, additionalStat);
      playerHero.displayHero();
    } else if (heroClass === "Knight") {
      playerHero = new Knight(heroParams, additionalAbility, additionalStat);
      playerHero.displayHero();
    } else {
      console.error("Упс! Произошла какая-то ошибка!");
      return;
    }

    // Отображение информации о герое игрока
    displayPlayerHero(playerHero);

    // Активация кнопок получения противника и использования умения
    getEnemyButton?.removeAttribute("disabled");
    doSkillButton?.removeAttribute("disabled");
  } else {
    // Предупреждение о необходимости добавить имя герою
    alert("Добавьте герою имя!");
  }
});

/**
 * Обработчик события click для кнопки получения противника.
 */
getEnemyButton?.addEventListener("click", () => {
  // Запрос к внешнему API для получения данных о героях
  fetch(`https://api-code.practicum-team.ru/heroes`)
    // Обработка ответа сервера
    .then((response) => response.json())
    .then((data) => {
      // Выбор случайного героя из полученных данных
      let randomEnemy = data[Math.floor(Math.random() * data.length)];
      // Создание экземпляра класса героя противника
      let enemyParams = {
        name: randomEnemy.title,
        level: Math.floor(Math.random() * 10) + 1,
        healthPoints: randomEnemy.hp,
        stats: {
          str: randomEnemy.str,
          int: randomEnemy.int,
          agi: randomEnemy.agi,
        },
      };
      enemyHero = new Hero(enemyParams);

      // Отображение информации о герое противнике
      displayEnemyHero(enemyHero);

      // Проверка, создал ли пользователь своего героя
      if (playerHero !== null) {
        // Если есть оба участника, снимаем блокировку с кнопки начала боя
        startBattleButton?.removeAttribute("disabled");
      }
    })
    // В случае ошибки запроса выводим сообщение об ошибке в консоль
    .catch((error) => console.error("Ошибка:", error));
});

/**
 * Функция отображения информации о герое игрока на странице.
 * @param hero - Экземпляр класса Hero, представляющий героя игрока.
 * @returns void
 */
function displayPlayerHero(hero: Hero): void {
  if (hero) {
    // Получение элементов для отображения информации о герое
    const playerHeroNameElement = document.getElementById("playerHeroName");
    const playerHeroLevelElement = document.getElementById("playerHeroLevel");
    const playerHeroHpElement = document.getElementById("playerHeroHp");
    const playerHeroStrengthElement =
      document.getElementById("playerHeroStrength");
    const playerHeroIntelligenceElement = document.getElementById(
      "playerHeroIntelligence"
    );
    const playerHeroAgilityElement =
      document.getElementById("playerHeroAgility");
    const playerHeroClassElement = document.getElementById("playerHeroClass");

    // Обновление текстовых элементов с информацией о герое
    if (playerHeroNameElement) {
      playerHeroNameElement.innerHTML = hero.name;
    }

    if (playerHeroLevelElement) {
      playerHeroLevelElement.innerHTML = hero.level.toString();
    }

    if (playerHeroHpElement) {
      playerHeroHpElement.innerHTML = hero.healthPoints.toString();
    }

    if (playerHeroStrengthElement) {
      playerHeroStrengthElement.innerHTML = hero.stats.str.toString();
    }

    if (playerHeroIntelligenceElement) {
      playerHeroIntelligenceElement.innerHTML = hero.stats.int.toString();
    }

    if (playerHeroAgilityElement) {
      playerHeroAgilityElement.innerHTML = hero.stats.agi.toString();
    }

    // Отображение класса героя или "Unknown", если класс не определен
    if (playerHeroClassElement) {
      playerHeroClassElement.innerHTML =
        gameClasses[hero.constructor.name] || "Unknown";
    }
  }
}

/**
 * Функция отображения информации о герое противника на странице.
 * @param hero - Экземпляр класса Hero, представляющий героя противника.
 * @returns void
 */
function displayEnemyHero(hero: Hero): void {
  if (hero) {
    // Получение элементов для отображения информации о герое противника
    const enemyHeroNameElement = document.getElementById("enemyHeroName");
    const enemyHeroLevelElement = document.getElementById("enemyHeroLevel");
    const enemyHeroHpElement = document.getElementById("enemyHeroHp");
    const enemyHeroStrengthElement =
      document.getElementById("enemyHeroStrength");
    const enemyHeroIntelligenceElement = document.getElementById(
      "enemyHeroIntelligence"
    );
    const enemyHeroAgilityElement = document.getElementById("enemyHeroAgility");
    const enemyHeroClassElement = document.getElementById("enemyHeroClass");

    // Обновление текстовых элементов с информацией о герое противнике
    if (enemyHeroNameElement) {
      enemyHeroNameElement.innerHTML = hero.name;
    }

    if (enemyHeroLevelElement) {
      enemyHeroLevelElement.innerHTML = hero.level.toString();
    }

    if (enemyHeroHpElement) {
      enemyHeroHpElement.innerHTML = hero.healthPoints.toString();
    }

    if (enemyHeroStrengthElement) {
      enemyHeroStrengthElement.innerHTML = hero.stats.str.toString();
    }

    if (enemyHeroIntelligenceElement) {
      enemyHeroIntelligenceElement.innerHTML = hero.stats.int.toString();
    }

    if (enemyHeroAgilityElement) {
      enemyHeroAgilityElement.innerHTML = hero.stats.agi.toString();
    }

    // Отображение класса героя противника или "Unknown", если класс не определен
    if (enemyHeroClassElement) {
      enemyHeroClassElement.innerHTML =
        gameClasses[hero.constructor.name] || "Unknown";
    }
  }

  // Вызов метода displayHero для вывода дополнительной информации о герое противнике в консоль
  hero.displayHero();
}

/**
 * Функция отображения информации о победившем герое в пользовательском интерфейсе.
 *
 * @param {Hero} hero - Объект героя, победившего в битве.
 * @returns {void}
 */
function displayWinnerHero(hero: Hero): void {
  // Проверка, что объект героя существует
  if (hero) {
    // Получение элементов для отображения информации о герое
    const winnerHeroNameElement = document.querySelectorAll(".winnerHeroName");
    const winnerHeroOppositionElement =
      document.getElementById("winnerOpposition");
    const winnerHeroLevelElement = document.getElementById("winnerHeroLevel");
    const winnerHeroHpElement = document.getElementById("winnerHeroHp");
    const winnerHeroStrengthElement =
      document.getElementById("winnerHeroStrength");
    const winnerHeroIntelligenceElement = document.getElementById(
      "winnerHeroIntelligence"
    );
    const winnerHeroAgilityElement =
      document.getElementById("winnerHeroAgility");
    const winnerHeroClassElement = document.getElementById("winnerHeroClass");

    // Обновление текстовых элементов с информацией о герое
    if (winnerHeroNameElement) {
      // Обновление имени героя на всех соответствующих элементах
      winnerHeroNameElement.forEach((elem) => {
        elem.textContent = hero.name;
      });
    }

    if (winnerHeroOppositionElement) {
      // Определение статуса героя (Ваш герой или Герой оппонента)
      if (hero === playerHero) {
        winnerHeroOppositionElement.innerHTML = "Ваш герой";
      } else {
        winnerHeroOppositionElement.innerHTML = "Герой оппонента";
      }
    }

    if (winnerHeroLevelElement) {
      // Обновление уровня героя
      winnerHeroLevelElement.innerHTML = hero.level.toString();
    }

    if (winnerHeroHpElement) {
      // Обновление здоровья героя
      winnerHeroHpElement.innerHTML = hero.healthPoints.toString();
    }

    if (winnerHeroStrengthElement) {
      // Обновление статистики силы героя
      winnerHeroStrengthElement.innerHTML = hero.stats.str.toString();
    }

    if (winnerHeroIntelligenceElement) {
      // Обновление статистики интеллекта героя
      winnerHeroIntelligenceElement.innerHTML = hero.stats.int.toString();
    }

    if (winnerHeroAgilityElement) {
      // Обновление статистики ловкости героя
      winnerHeroAgilityElement.innerHTML = hero.stats.agi.toString();
    }

    // Отображение класса героя или "Unknown", если класс не определен
    if (winnerHeroClassElement) {
      winnerHeroClassElement.innerHTML =
        gameClasses[hero.constructor.name] || "Unknown";
    }
  }
}

/**
 * Функция подсчета суммы характеристик героя.
 * @param hero - Экземпляр класса Hero, для которого подсчитывается сумма характеристик.
 * @returns number - Сумма характеристик героя.
 */
function countStatsSum(hero: Hero): number {
  let statsSum = 0;

  // Подсчет суммы силы, интеллекта, ловкости и очков здоровья героя
  statsSum += hero.stats.str;
  statsSum += hero.stats.int;
  statsSum += hero.stats.agi;
  statsSum += hero.healthPoints;

  return statsSum;
}

/**
 * Функция арены, где герои участвуют в танцевальном баттле.
 * @param firstHero - Экземпляр класса Mage или Knight, представляющий первого участника.
 * @param secondHero - Экземпляр базового класса Hero, представляющий второго участника.
 * @returns void
 */
function arena(firstHero: Mage | Knight, secondHero: Hero): void {
  writeToConsole("");
  writeToConsole(
    `Да начнётся танцевальный баттл между ${firstHero.name} и ${secondHero.name}!`
  );

  let winner = getWinner(firstHero, secondHero);
  showWinner(winner);
}

/**
 * Функция определения победителя в сражении между двумя героями.
 *
 * @param {Mage | Knight} firstHero - Первый герой (Маг или Рыцарь).
 * @param {Hero} secondHero - Второй герой (любого типа).
 * @returns {Mage | Knight | Hero} - Победивший герой.
 */
function getWinner(
  firstHero: Mage | Knight,
  secondHero: Hero
): Mage | Knight | Hero {
  // Рассчет суммы параметров для каждого героя
  let fistHeroSum = countStatsSum(firstHero);
  let secondHeroSum = countStatsSum(secondHero);

  // Вывод сумм в консоль для отладки
  writeToConsole(`Сумма значений параметров первого героя: ${fistHeroSum}`);
  writeToConsole(`Сумма значений параметров второго героя: ${secondHeroSum}`);

  // Расчет вероятности победы первого героя
  let chanceFirst = fistHeroSum / (fistHeroSum + secondHeroSum);

  // Генерация случайного числа
  const randomValue: number = getRandomNumber();

  // Вывод случайного числа и расчетной вероятности в консоль для отладки
  console.log(
    randomValue <= chanceFirst,
    "rand:",
    randomValue,
    "gleb:",
    chanceFirst
  );

  // Определение победителя и возвращение его
  if (randomValue <= chanceFirst) {
    return firstHero;
  } else {
    return secondHero;
  }
}

// Обработчик события "click" для кнопки начала боя
startBattleButton?.addEventListener("click", () => {
  // Проверка наличия героев перед началом боя
  if (playerHero === null || enemyHero === null) {
    return undefined;
  }
  // Вызов функции арены с участием игрока и противника
  arena(playerHero, enemyHero);
});

/**
 * Функция отображения победителя в консоли и всплывающем окне.
 *
 * @param {Hero | Mage | Knight | null} winner - Победивший герой или null в случае ничьей.
 * @returns {void}
 */
function showWinner(winner: Hero | Mage | Knight | null): void {
  // Вывод сообщения о победителе в консоль и всплывающее окно
  if (winner) {
    writeToConsole(`Ритмично чествуем победителя: ${winner.name}`);
    // alert(`Ритмично чествуем победителя: ${winner.name}`);
    displayWinnerHero(winner);
    playColors();
    openPopup();
  }
}

const popup = document.getElementById("popup")!;

/**
 * Функция открытия всплывающего окна с эффектом появления.
 *
 * @returns {void}
 */
function openPopup(): void {
  overlay.classList.toggle("block");
  popup.style.display = "block";

  // Задержка перед добавлением класса для плавного появления
  setTimeout(() => {
    overlay.classList.toggle("opacity");
    popup.style.opacity = "1";
  }, 5);

  // Вызов функции закрытия всплывающего окна
  closePopup();
}

/**
 * Функция закрытия всплывающего окна с эффектом исчезновения.
 *
 * @returns {void}
 */
function closePopup(): void {
  // Установка таймаута перед закрытием всплывающего окна
  let closeTimeout = setTimeout(() => {
    overlay.classList.toggle("opacity");
    popup.style.opacity = "0";

    // Задержка перед скрытием
    setTimeout(() => {
      overlay.classList.toggle("block");
      popup.style.display = "block";
    }, 300);
  }, 5000); // 5000 миллисекунд (5 секунд)
}

/**
 * Функция генерации случайного числа с двумя знаками после запятой.
 *
 * @returns {number} - Случайное число.
 */
function getRandomNumber(): number {
  const randomNumber: number = Math.random();
  return parseFloat(randomNumber.toFixed(2));
}

/**
 * Функция запуска цветовой анимации на элементе body.
 * @returns {void}
 */
function playColors(): void {
  let body = document.querySelector("body");
  // Приостановка анимации после 5 секунд
  setTimeout(() => {
    if (body) {
      body.style.animationPlayState = "paused";
    }
  }, 5000);
  // Сброс состояния анимации на 'unset'
  if (body) {
    body.style.animationPlayState = "unset";
  }
}
