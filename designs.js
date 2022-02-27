var drawCanvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var boxes = document.getElementsByClassName('cell');

//user selection 
document.getElementById('sizePicker').onsubmit = function () {
    userSelection();
};

//how it makes the grid looping through, removes previous grid from before in beginning
function makeGrid(tall, wide) {
    var mesh = '';
    for (let row = 0; row < tall; row++) {
        mesh += '<tr class="row-' + row + '">';
        for (let column = 0; column < wide; column++) {
            mesh += '<td class="cell" id="row-' + row + '_cell-' + column + '"></td>';
        }
    }
    clickBox();
    drawCanvas.innerHTML = mesh;
}

//listen for clicks and change color
function clickBox() {
    for (let x = 0; x < boxes.length; x++) {
        boxes[x].addEventListener("click", function (event) {
            let checKed = event.target;
            checKed.style.backgroundColor = color.value;
        });
    }
}

//user selection getting the height and width of the grid
function userSelection() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
