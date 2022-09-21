// Create a variable, counterValue, that will store the current counter value and initialize it with 0.
// Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
// Update the interface with the new value of the variable counterValue.

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueLabel: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterVal = Number.parseInt(refs.valueLabel.textContent) || 0;
function updateValue(newVal) {
  refs.valueLabel.textContent = newVal;
}
refs.decrementBtn.addEventListener("click", () => {
  counterVal -= 1;
  updateValue(counterVal);
});
refs.incrementBtn.addEventListener("click", () => {
  counterVal += 1;
  updateValue(counterVal);
});
