const size = document.querySelector('#grid-size');
const output = document.querySelector('.size-output');
const wrapper = document.querySelector('.wrapper');


document.addEventListener("DOMContentLoaded", startup);

let mouseDown = false;

function startup() {
  document.addEventListener("mousedown", () => mouseDown = true)
  document.addEventListener("mouseup", () => mouseDown = false)
  document.addEventListener("touchstart", () => mouseDown = true)
  document.addEventListener("touchend", () => mouseDown = false)
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
  cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
  cells.forEach(cell => cell.addEventListener('touchmove', e => {
    e.preventDefault();
    const color = document.querySelector('#cell-color').value; getTouchMouseTargetElement(e).style.backgroundColor = color;
  }))
}

function getTouchMouseTargetElement(e) {
  if (e.touches) {
    return document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY);
  }
  return e.target;
}

function changeColor() {
  if (mouseDown) {
    const color = document.querySelector('#cell-color').value;
    this.style.backgroundColor = color;
  }
}

const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', reset);