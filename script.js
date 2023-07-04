// set initial value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");

const reset = () => {
  count = 0;
  value.textContent = count;
};

const decrease = () => {
  count--;
  value.textContent = count;
};

const increase = () => {
  count++;
  value.textContent = count;
};

// Add event listeners to the buttons
const decreaseButton = document.querySelector(".btn-decrease");
const resetButton = document.querySelector(".btn-reset");
const increaseButton = document.querySelector(".btn-increase");

decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
increaseButton.addEventListener("click", increase);
