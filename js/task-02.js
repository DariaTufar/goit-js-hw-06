const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients= document.getElementById(`ingredients`);

ingredients.forEach ( function (element) {
  const li = document.createElement( `li`);
  li.textContent = element;
  li.classList.add(`item`)
  console.log(li)
  listOfIngredients.append(li)
  
})



