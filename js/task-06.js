// Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.
 

// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
// To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

const input = document.querySelector(`#validation-input`);
console.log(input)

input.addEventListener( `blur`,  onBlur);

function onBlur(event) {
    // console.log(event.currentTarget.value.length)
    // console.log(input.dataset.length)

    if (event.currentTarget.value.length === input.dataset.length)  {
        input.classList.add( ".valid");
    } else {
        input.classList.add(".invalid");
    }
}

