let click = false;
let colorSelection = document.getElementById("favcolor");
let eraser = document.querySelector(".eraser");

colorSelection.addEventListener("input", () => {
  return colorSelection.value;
});

eraser.addEventListener("click", () => {
  colorSelection.value = "#FFFFFF";
});

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
    square.style.border = "solid gray 1px";
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    createBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
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
