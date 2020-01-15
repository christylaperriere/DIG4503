//requiring Person.js file
const Person = require("./Person.js");

//creating a class that extends another
class Christy extends Person {

    constructor(name, favoriteColor, age) {
        //taking data from parent class
        super(name, favoriteColor);
        //instantiating new variable
        this.age = age;
    }
}

//exporting data
module.exports = Christy;

