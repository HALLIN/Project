var LivingCreature = require('/.LivingCreature.js');
module.exports = class Grass extends LivingCreature{
    
    constructor(x, y, index){
        super(x,y,index);
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
    this.getNewCoordinates;
    return super.chooseCell(character);
}

    mult() {

        var empty = randomnumber(this.chooseCell(0));
        this.multiply++
        if (empty && this.multiply > 0) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 1;
            var gr = new Grass(newX, newY, 1)
            grassArr.push(gr);
        }
    }

}

var randomnumber = matrix[Math.floor(Math.random()*matrix.length)];
