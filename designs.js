// Select color input
const COLOR_INPUT = document.querySelector('input[type=color]');
// Select size input
const SIZE_INPUT = document.querySelectorAll('input[type=number]');
// When size is submitted by the user, call makeGrid()
document.querySelector('form').addEventListener('submit', makeGrid);
