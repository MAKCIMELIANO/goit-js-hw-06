// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//     В результате при перетаскивании ползунка будет меняться размер текста.

const smartInput = document.querySelector('#font-size-control');

const outInputText = document.querySelector('#text');

smartInput.addEventListener('input', event => {
  outInputText.style.fontSize = `${event.target.value}px`;
});
