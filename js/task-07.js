// Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

const refs = {
  input: document.querySelector(`#font-size-control`),
  text: document.querySelector(`#text`),
};
refs.input.value = 16;
refs.input.addEventListener(`input`, (event) => {
  text.style.fontSize = refs.input.value + `px`;
});
