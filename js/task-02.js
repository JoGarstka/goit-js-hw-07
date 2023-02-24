const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.classList.add('item');

const title = document.createElement('h2');
title.textContent = 'INGREDIENTS LIST';
ingredientsList.before(title);

ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  ingredientsList.append(element);
});