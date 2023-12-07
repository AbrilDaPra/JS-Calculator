const displayLastValue = document.getElementById("last-value");
const displayActualValue = document.getElementById("actual-value");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");

const display = new Display(displayLastValue, displayActualValue);

numbersButtons.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

operatorsButtons.forEach(button => {
    button.addEventListener("click", () => display.compute(button.value));
});