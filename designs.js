const submitButton = document.querySelector('input[type=submit]');
const grid = document.getElementById('pixelCanvas');
// Select color input
let colorPickerPanel = document.getElementById('colorPicker');
// Select size input
const gridHeightInput = document.getElementById('inputHeight');
const gridWidthInput = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', makeGrid);

function makeGrid(e){
    //resets the grid
    grid.innerHTML = '';
    //allows changes to be applied
    e.preventDefault();

    for(let rows = 1; rows <= gridHeightInput.value; rows++){
        let newTableRow = document.createElement('tr');
        for(let columns = 1; columns <= gridWidthInput.value; columns++){
            let newTableColumn = document.createElement('td');
            newTableRow.appendChild(newTableColumn);
        }
        grid.appendChild(newTableRow);
    }
}
//ensure only clicked grid squares change color
grid.addEventListener('click', function(e){
    if(e.target.nodeName === 'TD'){
        e.target.style.backgroundColor = colorPickerPanel.value;
    }
});
