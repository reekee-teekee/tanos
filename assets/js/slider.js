const sliderValue = document.querySelector('.calc__value');
const sliderInput = document.querySelector('.calc__range');

sliderInput.oninput = (() => {
  let value = sliderInput.value;
  sliderValue.textContent = value;
});