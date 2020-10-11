// Select color input
const COLOR_INPUT = document.querySelector('input[type=color]');
// Select size input
const SIZE_INPUT = document.querySelectorAll('input[type=number]');
// When size is submitted by the user, call makeGrid()
document.querySelector('form').addEventListener('submit', makeGrid);
// This function dynamically creates a grid, and clears existing ones
function makeGrid() {
  // When there is a pre-existent grid, this while-loop will clear it
  while(document.querySelector('tr')){
    document.querySelector('tr').remove();
  };
  // Create grid using size input for dimensions
  for(let i = 0; i < Number(SIZE_INPUT[0].value); i++){
    // Create table row
    const ROW = document.createElement('tr');
    // Fill table row with cells
    for(let i = 0; i < Number(SIZE_INPUT[1].value); i++){
      // Create blank cell
      const CELL = document.createElement('td');
      CELL.style.backgroundColor='white';
      // When a cell is clicked, call changeColor()
      CELL.addEventListener('click', changeColor);
      // Append cell to table row
      ROW.appendChild(CELL);
    }
    // Append table row to table
    document.querySelector('table').appendChild(ROW);
  }
  // Prevent default behavior on submit event
  event.preventDefault();
}
// This function changes the color of clicked cells
function changeColor(event) {
  // Change the background-color property of the event target
  if(event.currentTarget.style.backgroundColor==='white'){
    event.currentTarget.style.backgroundColor=COLOR_INPUT.value;
  }else {
    event.currentTarget.style.backgroundColor='white';
  }
}
