// Select DOM elements to interact with:
var sizePicker = document.querySelector('#sizePicker');
var gridCanvas = document.querySelector('#pixelCanvas');
var colorPicker = document.querySelector('#colorPicker');

//event listener for getting grid size from Submit
sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  var gridHeight = document.querySelector('#inputHeight').value;
  var gridWidth =  document.querySelector('#inputWidth').value;
  makeGrid(gridHeight, gridWidth);
})

//event listener for color selector
var cellColor = '#000000'; //set intial color
colorPicker.addEventListener('input', function() {
  cellColor = colorPicker.value;
})

//Create table and establish event listener on each cell:
function makeGrid(gridHeight, gridWidth) {
  gridCanvas.innerHTML = ""; //clear previous table
  //Table creation code from:
  //https://stackoverflow.com/questions/14643617/create-table-using-javascript
  for (var h = 1; h <= gridHeight; h++) {
    var row = document.createElement('tr');
    for (var w = 1; w <= gridWidth; w++) {
      var column = document.createElement('td');
      row.appendChild(column);
      column.addEventListener('click', function(event) {
        event.target.style.backgroundColor = cellColor;
      })
    }
  gridCanvas.appendChild(row);
  }
}
