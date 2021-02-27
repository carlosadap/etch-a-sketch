const size = document.querySelector('#grid-size');
const output = document.querySelector('.size-output');
const wrapper = document.querySelector('.wrapper');

output.textContent = size.value;
createGrid(size.value);

size.addEventListener('input', function () {
  output.textContent = size.value;
  wrapper.style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
  wrapper.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
  createGrid(size.value);
});

function createGrid(n) {
  let idx = 0;
  let wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = "";
  while (idx < n * n) {
    const div = document.createElement('div');
    div.className = `cell cell-${idx}`;
    wrapper.appendChild(div);
    idx++;
  }
  addCellListener();
}

function addCellListener() {
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => cell.addEventListener('mouseover', changeColor))
}

function changeColor() {
  const color = document.querySelector('#cell-color').value;
  this.style.backgroundColor = color;
}