var side = 20;
var socket = io();

var m = 20;
var n = 20;

function setup() {
    frameRate(5);
    //createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(n*side,m*side);
    background('#acacac');


}
function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("brown");
            }
            else if (matrix[y][x] == 4) {
                fill("gray");
            }
            else if (matrix[y][x] == 5) {
                fill("lime");
            }
            rect(x * side, y * side, side, side);
            // fill("black")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }
}


socket.on("matrix",drawMatrix);