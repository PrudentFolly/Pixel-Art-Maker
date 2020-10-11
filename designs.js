// Select color input
const COLOR_INPUT = document.querySelector('input[type=color]');
// Select size input
const SIZE_INPUT = document.querySelectorAll('input[type=number]');
// When size is submitted by the user, call makeGrid()
document.querySelector('form').addEventListener('submit', makeGrid);
// This function dynamically creates a grid, and clears existing ones
function makeGrid() {
  // Create grid using size input for dimensions
  for(let i = 0; i < Number(SIZE_INPUT[0].value); i++){
    // Create table row
    const ROW = document.createElement('tr');
    // Fill table row with cells
    for(let i = 0; i < Number(SIZE_INPUT[1].value); i++){
      // Create blank cell
      const CELL = document.createElement('td');
      // Append cell to table row
      ROW.appendChild(CELL);
    }
    // Append table row to table
    document.querySelector('table').appendChild(ROW);
  }
  // Prevent default behavior on submit event (was causing issues)
  event.preventDefault();
}
