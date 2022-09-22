// Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

const refs = {
  input: document.getElementById(`name-input`),
  output: document.getElementById(`name-output`),
};

// option 1

refs.input.addEventListener(`input`, (event) => {
  // option 1
  // refs.output.textContent = event.currentTarget.value.trim()
  //   ? event.currentTarget.value.trim() : `Anonymous`;

  // option 2
  refs.output.textContent = event.currentTarget.value.trim() || `Anonymous`;
});
