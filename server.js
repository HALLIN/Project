var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

var n = 20;
var m = 20;

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

function getRandomArbitrary(min,max){
    return Math.random() * (max - min) + min;
}

function FillMatrix(n,m)
{
    matrix = [];
    for(var i =0;i<n;i++)
    {
        matrix.push([]);
        for (var j = 0;j<m;j++){
            matrix[i].push(Math.round(getRandomArbitrary(0,5)));
        }
    }
    return matrix;
}


//matrix = [
//    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5],
//    // [0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
//    // [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
//    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5]
//
//];
matrix = FillMatrix(n,m);
Grass = require('./Grass.js');
Grass1 = require('./Grass1.js');
Gishatich = require('./Gishatich.js');
Doubleker = require('./Doubleker.js');
Xotaker = require('./Xotaker.js');


//var n = 20;
//var elem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
//for (y = 0; y < n; y++) {
//
//    matrix.push([])
//    for (x = 0; x < n; x++) {
//        var r = Math.floor(Math.random() * elem.length);
//        matrix[y].push(elem[r]);
//    }
//}

var gr = new Grass(5, 4, 1);
var d = gr.chooseCell(1);
console.log(d);



grassArr = [];
grass1Arr = [];
xotakerArr = [];
gishatichArr = [];
doublekerArr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {

            var xot1 = new Grass(x, y, 1);
            grassArr.push(xot1);

        }
        else if (matrix[y][x] == 2) {

            var ker1 = new Xotaker(x, y, 2);
            xotakerArr.push(ker1);

        }
        else if (matrix[y][x] == 3) {

            var gz1 = new Gishatich(x, y, 3);
            gishatichArr.push(gz1);

        }
        else if (matrix[y][x] == 4) {

            var dk1 = new Doubleker(x, y, 4);
            doublekerArr.push(dk1);

        }
        else if (matrix[y][x] == 5) {

            var gr12 = new Grass1(x, y, 5);
            grass1Arr.push(gr12);

        }
    }
}
console.log(grassArr);

setInterval(drawurish,200);

function drawurish() {
    for (var i in grassArr) {

        grassArr[i].mult();
    }
    for (var i in grass1Arr) {

        grass1Arr[i].mult();
    }
    for (var i in xotakerArr) {

        xotakerArr[i].eat();
        xotakerArr[i].mult();
        xotakerArr[i].move();
        xotakerArr[i].die();
    }
    for (var i in gishatichArr) {

        gishatichArr[i].eat();
        gishatichArr[i].mult();
        gishatichArr[i].move();
        gishatichArr[i].die();
    }
    for (var i in doublekerArr) {

        doublekerArr[i].eat();
        doublekerArr[i].mult();
        doublekerArr[i].move();
        doublekerArr[i].die();
    }

    io.sockets.emit("matrix",matrix);
}