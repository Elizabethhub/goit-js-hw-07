// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает
//кнопку Создать, после чего рендерится коллекция.
//При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает
//1 параметр amount - число. Функция создает столько div,
//сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и
//выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnClearRef = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector("#boxes");

let inputValue = 0;

inputRef.addEventListener("input", (e) => {
  inputValue = +e.target.value;
});

btnCreateRef.addEventListener("click", createBoxes);
btnClearRef.addEventListener("click", clearBoxes);

function createBoxes() {
  console.log(inputValue);
  const boxes = [];
  let size = 30;
  for (let i = 0; i < inputValue; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box-style");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = createRandColor();
    size += 10;
    boxes.push(box);
    console.log(boxes);
  }
  clearBoxes();
  boxesContainer.append(...boxes);
}
function clearBoxes() {
  boxesContainer.innerHTML = "";
}
function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

console.log(createRandColor());

function createRandColor() {
  return `rgb(${randomNumb(0, 255)}, ${randomNumb(0, 255)}, ${randomNumb(0, 255)})`;
}
