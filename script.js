// Allows user to change the amount of cells in the grid
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

// Targets button, when clicked invokes grid() function
let gridButton = document.getElementsByClassName('grid_selector')[0];
gridButton.addEventListener('click', grid)

// Resets grid by changing its value to 0 
let clearButton = document.getElementsByClassName('grid_selector')[1];
clearButton.addEventListener('click', function() {
  gridInput = 0; 
  let container = document.getElementById('grid_container');
  container.innerHTML = ''; 
});

// Color value generator for gridCells
function gridRGB() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  let RGBcolor = "rgb(" + x + ',' + y + ',' + z + ")"
  return RGBcolor
}

let gridCells = document.getElementsByClassName('grid');

// Generates a backgroundcolor when clicked using 
for (let i = 0; i < gridCells.length; i++) {
  gridCells[i].addEventListener('click', function() {
    gridCells[i].style.backgroundColor = gridRGB();
  });
}
