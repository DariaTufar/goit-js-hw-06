const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients= document.getElementById(`ingredients`);

const listEl =ingredients.map ((ingredient) => {
  const itemEl = document.createElement( `li`);
  itemEl.textContent = ingredient;
  itemEl.classList.add(`item`);

  return itemEl;
})

listOfIngredients.append(...listEl);


