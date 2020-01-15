//requiring Person.js file
const Person = require("./Person.js");

//creating a class that extends another
class Christy extends Person {

    constructor(name, color, age) {
        //taking data from parent class
        super(name, color);
        //instantiating new variable
        this.age = age;
    }
}

//exporting data
module.exports = Christy;

