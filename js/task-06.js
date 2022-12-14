// Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
// To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

const input = document.querySelector(`#validation-input`);
console.log(input);

input.addEventListener(`blur`, outBlur);

function outBlur() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }
}
