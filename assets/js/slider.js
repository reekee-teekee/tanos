const sliderValue = document.querySelector('.calc__value');
const sliderInput = document.querySelector('.calc__range');

sliderInput.oninput = (() => {
  let value = sliderInput.value;
  sliderValue.textContent = value;
});

sliderInput.addEventListener('mousemove', function () {
  const x = sliderInput.value;
  const color = 'linear-gradient(90deg, rgb(190, 105, 213)' + x + '%, rgb(186, 241, 255)' + x + '%)';
  sliderInput.style.background = color;
});

sliderInput.addEventListener('click', function () {
  const x = sliderInput.value;
  const color = 'linear-gradient(90deg, rgb(190, 105, 213)' + x + '%, rgb(186, 241, 255)' + x + '%)';
  sliderInput.style.background = color;
});