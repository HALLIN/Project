var LivingCreature = require('/.LivingCreature.js');
module.exports = class Doubleker extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 5;

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
 


    mult() {

        var empty = randomnumber(this.chooseCell(0));

        if (empty && this.energy > 11) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 4;
            var xt = new Doubleker(newX, newY, 4)
            doublekerArr.push(xt);
        }
    }

    move() {

        var empty = randomnumber(this.chooseCell(0));
        this.energy--;

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {

        var food = randomnumber(this.chooseCell(2));
        var food1 = randomnumber(this.chooseCell(5));
        var food2 = randomnumber(this.chooseCell(1));
        if (food) {

            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {

                    xotakerArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if (food2) {

            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {

                    grassArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if (food1) {

            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in grass1Arr) {
                if (grass1Arr[i].x == newX && grass1Arr[i].y == newY) {

                    grass1Arr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in doublekerArr) {
                if (doublekerArr[i].x == this.x && doublekerArr[i].y == this.y) {

                    doublekerArr.splice(i, 1);
                }

            }
        }

    }

}

var randomnumber = matrix[Math.floor(Math.random()*matrix.length)];
