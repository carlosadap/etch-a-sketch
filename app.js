const size = document.querySelector('#grid-size');
const output = document.querySelector('.size-output');
const wrapper = document.querySelector('.wrapper');

output.textContent = size.value;

size.addEventListener('input', function () {
  output.textContent = size.value;
  wrapper.style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
  wrapper.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
});