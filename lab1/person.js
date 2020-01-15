//requiring chalk
const chalk = require("chalk"); 

//creating a class
class Person {
    //passing in arguments
    constructor(name, favoriteColor) {
        //instantiating variables
        this.name = name;
        this.favoriteColor = favoriteColor;   
    }

    //creating function
    speak() {
        console.log(chalk.keyword(this.favoriteColor)(this.name));
    }
}
    
//exporting data 
module.exports = Person; 