let click = false;
let colorSelection = document.getElementById("favcolor");
let eraser = document.querySelector(".eraser");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
let defaultSize = 16;
let size = defaultSize;

colorSelection.addEventListener("input", () => {
  return colorSelection.value;
});

eraser.addEventListener("click", () => {
  colorSelection.value = "#FFFFFF";
});

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeSize(value) {
  setCurrentSize(value);
}

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplatRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", coloring);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

function changeSize(input) {
  createBoard(input);
}

function coloring() {
  if (click) {
    this.style.backgroundColor = colorSelection.value;
  }
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
  click = false;
}

document.querySelector(".board").addEventListener("click", (e) => {
  click = !click;
  if (click) {
    document.querySelector(".mode").textContent =
      "Mode: Coloring. Click on the board to STOP coloring.";
  } else {
    document.querySelector(".mode").textContent =
      "Mode: Not coloring. Click on the board to START coloring.";
  }
});
