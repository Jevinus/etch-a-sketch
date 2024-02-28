// Create grid elements in js for functionality
// Create a button allowing for grid adjustment ranging from 1-100
// Create a button allowing for the change of grid color using RGB
// Add an onclick for the grid divs that changes individual its color 

const grid = document.createElement('div');
grid.classList.add('grid')
const gridContainer = document.getElementById('grid-container')
grid.style.backgroundColor = 'gray';
grid.style.border = '2px solid black';
grid.style.height = ' ';

gridContainer.appendChild(grid);

// Grid adjustment function

