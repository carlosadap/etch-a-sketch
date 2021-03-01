const size = document.querySelector('#grid-size');
const output = document.querySelector('.size-output');
const wrapper = document.querySelector('.wrapper');


document.addEventListener("DOMContentLoaded", startup);

let mouseDown = false;

function startup() {
  document.addEventListener("mousedown", () => mouseDown = true)
  document.addEventListener("mouseup", () => mouseDown = false)
  document.addEventListener("touchstart", (e) => {
    e.preventDefault();
    mouseDown = true
  })
  document.addEventListener("touchend", (e) => {
    e.preventDefault();
    mouseDown = false
  })
}

output.textContent = size.value;
createGrid(size.value);

size.addEventListener('input', reset);

function reset() {
  output.textContent = size.value;
  wrapper.style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
  wrapper.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
  createGrid(size.value);
}

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
  if (mouseDown) {
    const color = document.querySelector('#cell-color').value;
    this.style.backgroundColor = color;
  }
}

const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', reset);