const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const elements = ingredients.map(option => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = option;

  return listEl;
});

console.log(elements);

ingredientsEl.append(...elements);

console.log(ingredientsEl);
