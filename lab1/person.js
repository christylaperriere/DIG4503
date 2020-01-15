//creating a class
class Person {
    //passing in arguments
    constructor(name, color) {
        //instantiating variables
        this.name = name;
        this.color = color; 
    }
    //creating function
    speak() {
        console.log("hi!");
    }
}
//exporting data
module.exports = Person; 