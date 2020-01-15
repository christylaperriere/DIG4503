//requiring Cat.js file
const Cat = require("./Cat.js");

//cearing new class that extends parent
class Lion extends Cat {
    constuctor(color, age, weight) {
        //calling parent data
        super(color, age);
        //instantiating new variable
        this.weight = weight;
    }
}

//exporting data
module.exports = Lion; 