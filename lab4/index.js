
//requiring express 
const Express = require("express"); 
const App = Express(); 

//requiring chalk
const chalk = require("chalk"); 

//requiring pokemon
const getPokemon = require("json-pokemon/getPokemon");


//name route
App.get("/name/:name", function(Request, Response) {
   //accessing what user typed
    var pokeNameTyped = Request.params.name; 
    //using number to get correct pokemon
    var requestedPokemon = getPokemon.getPokemonByName(pokeNameTyped); 

    //Determining validity
    if(requestedPokemon == null) {
        //name entered is invalid, tell user
        Response.send("No pokemon has this name, try again"); 
        console.log(chalk.red(Request.path)); 
    }

    else {
        //name entered is valid, send matching pokemon
        Response.send(requestedPokemon); 
        //print path to console in green
        console.log(chalk.green(Request.path)); 
    }
});


//id route 
App.get("/id/:id", function(Request,Response) {
    //converting typed value to number
    var pokeID = Number(Request.params.id); 
    //using number to get correct pokemon
    var requestedPokemon = getPokemon.getPokemonById(pokeID); 

    //Determining validity
    if(requestedPokemon == null) {
        //id entered is invalid, tell user
        Response.send("No pokemon has this ID, try again."); 
        //print path to console in red
        console.log(chalk.red(Request.path)); 
    }

    else {
        //id entered is valid, send matching pokemon
        Response.send(requestedPokemon); 
        //print path to console in green
        console.log(chalk.green(Request.path)); 
    }
}); 


//listening on server
App.listen(80, function() {
    console.log("Server Jogging!");
});