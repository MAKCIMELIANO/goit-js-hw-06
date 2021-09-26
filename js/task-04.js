// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const clickCounter = {
  incrementBtn: document.querySelector("[data-action='increment']"),
  decrementBtn: document.querySelector("[data-action='decrement']"),
  spanOfValue: document.getElementById('value'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  clickCounter.spanOfValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  clickCounter.spanOfValue.textContent = counterValue;
};

clickCounter.incrementBtn.addEventListener('click', increment);
clickCounter.decrementBtn.addEventListener('click', decrement);
