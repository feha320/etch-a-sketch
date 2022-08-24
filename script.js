// row/column-selection

for (let i = 1; i <= 64; i++) {
  let select = document.getElementById("size");
  let option = document.createElement("option");
  select.options.add(option);
  option.text = i + "x" + i;
  option.value = i;
}

const maxSize = 600;

const btnstart = document.getElementById("btnstart");
const container = document.getElementById("container");
const btndel = document.getElementById("del");


let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


document.getElementById("btnstart").addEventListener("click", makeGrid);
document.getElementById("del").addEventListener("click", deleteGrid);

function makeGrid() {
  deleteGrid();
  makeRows();
  makeColumns();
  // addSize();
}


function makeRows() {
  let size = document.getElementById("size").value;
  for (i = 0; i < size; i++) {
    let col = document.createElement("div");
    container.appendChild(col).className = "gridRow";
  }
}

function makeColumns() {
  let size = document.getElementById("size").value;
  for (j = 0; j < size; j++) {
    for (i = 1; i <= size; i++) {
      let newCell = document.createElement("div");
      newCell.style.width = maxSize/size + "px";
      newCell.style.height = maxSize/size + "px";
      rows[j].appendChild(newCell).className = "cell";
    }
  }
}

// function addSize() {
//   var cellsAddSize = document.getElementsByClassName("cell");
//   console.log(cellsAddSize);
//   for (k = 0; k < cellsAddSize.length; k++) {
//     cellsAddSize[k].style.width = maxSize/size + "px";
//     cellsAddSize[k].style.height = maxSize/size + "px";
//   }
// }

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
