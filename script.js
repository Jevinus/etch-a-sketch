// Create grid elements in js for functionality
// Create a button allowing for grid adjustment ranging from 1-100
// Create a button allowing for the change of grid color using RGB
// Add an onclick for the grid divs that changes individual its color 

// Dynamic grid function
function grid() {
  let container = document.getElementById('grid_container');
  let gridInput = prompt("Enter grid size:");

  for (let i = 0; i <= gridInput; i++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);
  }

  container.appendChild(grid_container);
}

// Grid size button
let gridButton = document.getElementsByClassName('grid_selector')[0];
gridButton.addEventListener('click', grid)

// RGB value generator for grid cells
function gridRGB() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  let RGBcolor = "rgb(" + x + ',' + y + ',' + z + ")"
  console.log(RGBcolor)
}

// Reset grid
let clearButton = document.getElementsByClassName('grid_selector')[1];
clearButton.addEventListener('click', function() {
  gridInput = 0; 
  let container = document.getElementById('grid_container');
  container.innerHTML = ''; 
});

let gridCells = document.getElementsByClassName('grid')
gridCells.addEventListener('click', function() {
  gridCells.style.backgroundcolor = gridRGB();
});
