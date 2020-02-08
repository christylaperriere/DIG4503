//requiring express
const Express = require("express"); 
const App = Express(); 
const port = 80; 

//requiring chalk
const chalk = require("chalk"); 

//requiring json-pokemon
const jsonPokemon = require("json-pokemon"); 

for(let i=0; i<10; i++) {
    let name = jsonPokemon.name.findName(); 
    let color = jsonPokemon.id.findId(); 
    console.log(name); 
}