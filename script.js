// Create grid elements in js for functionality
// Create a button allowing for grid adjustment ranging from 1-100
// Create a button allowing for the change of grid color using RGB
// Add an onclick for the grid divs that changes individual its color 

// Dynamic grid function allowing for 
function grid(input) {
  let container = document.getElementById('grid_container');
  let gridInput = input;
  prompt(gridInput);

  for (let i = 0; i <= input; i++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.backgroundColor = 'blue';
    grid.style.border = '2px solid black';
    grid.style.overflow = 'hidden';
    container.appendChild(grid);
  }

  container.appendChild(grid_container);
}

// Button to change grid size
let gridButton = document.getElementsByClassName('grid_selector');
gridButton.addEventListener('click', grid())

// RGB value generator for grid cells
function gridRGB() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  let RGBcolor = "rgb(" + x + ',' + y + ',' + z + ")"
  console.log(RGBcolor)

}



