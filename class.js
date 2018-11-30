class Grass{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.multiply = 0;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }



    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length ){


            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
        this.multiply++
        if(empty && this.multiply>0){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 1;
        var gr = new Grass(newX,newY,1)
        grassArr.push(gr);
        }
     }
    
}

class Grass1{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.multiply = 0;
       this.directions = [
        [this.x - 2, this.y - 2],
        [this.x - 2, this.y - 1],
        [this.x - 2, this.y    ],
        [this.x - 2, this.y + 1],
        [this.x - 2, this.y + 2],
        [this.x - 1, this.y + 2],
        [this.x    , this.y + 2],
        [this.x + 1, this.y + 2],
        [this.x + 2, this.y + 2],
        [this.x + 2, this.y + 1],
        [this.x + 2, this.y    ],
        [this.x + 2, this.y - 1],
        [this.x + 2, this.y - 2],
        [this.x + 1, this.y - 2],
        [this.x    , this.y - 2],
        [this.x - 1, this.y - 2],
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }



    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length ){


            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
        this.multiply++
        if(empty && this.multiply>0){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 5;
        var grs = new Grass1(newX,newY,5)
        grass1Arr.push(grs);
        }
     }
    
}



class Gishatich{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 3;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length ){


            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));

        if(empty && this.energy > 15){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 3;
        var xt = new Gishatich(newX,newY,3)
        gishatichArr.push(xt);
        }
     }

     move(){

        var empty = random(this.chooseCell(0));
        this.energy--;

        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        }
     }

     eat()
     {

        var food = random(this.chooseCell(2));
        var food1 = random(this.chooseCell(1));
        var food2 = random(this.chooseCell(4));
        if(food ){

            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == newX && xotakerArr[i].y == newY){

                    xotakerArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
        if(food2 ){

            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for(var i in doublekerArr)
            {
                if(doublekerArr[i].x == newX && doublekerArr[i].y == newY){

                    doublekerArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
        if(food1 ){

            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for(var i in grassArr)
            {
                if(grassArr[i].x == newX && grassArr[i].y == newY){

                    grassArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

     }

     die()
     {
        if(this.energy<=0)
        {
            matrix[this.y][this.x] = 0;
            for(var i in gishatichArr)
            {
                if(gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){

                gishatichArr.splice(i, 1);
                }

            }
        }

     }
    
}





class Xotaker{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 4;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length ){


            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));

        if(empty && this.energy > 7){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 2;
        var xt = new Xotaker(newX,newY,2)
        xotakerArr.push(xt);
        }
     }

     move(){

        var empty = random(this.chooseCell(0));
        this.energy--;

        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 2;
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        }
     }

     eat()
     {

        var food = random(this.chooseCell(1));
        var food1 = random(this.chooseCell(5));
        if(food ){

            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            for(var i in grassArr)
            {
                if(grassArr[i].x == newX && grassArr[i].y == newY){

                grassArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
        if(food1 ){

            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            for(var i in grass1Arr)
            {
                if(grass1Arr[i].x == newX && grass1Arr[i].y == newY){

                grass1Arr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

     }

     die()
     {
        if(this.energy<=0)
        {
            matrix[this.y][this.x] = 0;
            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){

                xotakerArr.splice(i, 1);
                }

            }
        }

     }
    
}



class Doubleker{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 5;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length ){


            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));

        if(empty && this.energy > 11){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 4;
        var xt = new Doubleker(newX,newY,4)
        doublekerArr.push(xt);
        }
     }

     move(){

        var empty = random(this.chooseCell(0));
        this.energy--;

        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 4;
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        }
     }

     eat()
     {

        var food = random(this.chooseCell(2));
        var food1 = random(this.chooseCell(5));
        var food2 = random(this.chooseCell(1));
        if(food ){

            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for(var i in xotakerArr)
            {
                if(xotakerArr[i].x == newX && xotakerArr[i].y == newY){

                    xotakerArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if(food2 ){

            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for(var i in grassArr)
            {
                if(grassArr[i].x == newX && grassArr[i].y == newY){

                    grassArr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }

        if(food1 ){

            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for(var i in grass1Arr)
            {
                if(grass1Arr[i].x == newX && grass1Arr[i].y == newY){

                    grass1Arr.splice(i, 1);
                }

            }

            this.x = newX;
            this.y = newY;
            this.energy += 2;

        }
     }


     die()
     {
        if(this.energy<=0)
        {
            matrix[this.y][this.x] = 0;
            for(var i in doublekerArr)
            {
                if(doublekerArr[i].x == this.x && doublekerArr[i].y == this.y){

                    doublekerArr.splice(i, 1);
                }

            }
        }

     }
    
}