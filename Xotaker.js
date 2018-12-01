class Xotaker extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 4;
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

        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 7) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 2;
            var xt = new Xotaker(newX, newY, 2)
            xotakerArr.push(xt);
        }
    }

    move() {

        var empty = random(this.chooseCell(0));
        this.energy--;

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }

    eat() {

        var food = random(this.chooseCell(1));
        var food1 = random(this.chooseCell(5));
        if (food) {

            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
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
            matrix[newY][newX] = 2;
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
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {

                    xotakerArr.splice(i, 1);
                }

            }
        }

    }

}