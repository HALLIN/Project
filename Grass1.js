var LivingCreature = require('/.LivingCreature.js');
module.exports = class Grass1 extends LivingCreature{
    constructor(x, y, index){
        super(x,y,index);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
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
        this.getNewCoordinates;
        return super.chooseCell(character);
    }


    mult() {

        var empty = randomnumber(this.chooseCell(0));
        this.multiply++
        if (empty && this.multiply > 0) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 5;
            var grs = new Grass1(newX, newY, 5)
            grass1Arr.push(grs);
        }
    }

}


var randomnumber = matrix[Math.floor(Math.random()*matrix.length)];