// Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

const refs = {
  input: document.getElementById(`name-input`),
  output: document.getElementById(`name-output`),
};

refs.input.addEventListener(`input`, handlerInput);

function handlerInput(event) {
  if (event.currentTarget.value === ``) {
    refs.output.textContent = `Anonymous`;
  } else {
    refs.output.textContent = event.currentTarget.value;
  }
}
