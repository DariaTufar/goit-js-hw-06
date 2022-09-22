// Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnChangeColor: document.querySelector(`.change-color`),
  spanColor: document.querySelector(`.color`),
  body: document.querySelector(`body`),
};

refs.btnChangeColor.addEventListener(`click`, onClickChangeColor);

function onClickChangeColor() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
  console.log(currentColor);
  refs.spanColor.replaceChildren(currentColor);
}
