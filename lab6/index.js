// Requiring express
const Express = require('express');

// Requiring cors
const cors = require('cors'); 
App.use(cors()); 


// Requiring chalk
const chalk = require('chalk'); 

// Requiring pokemon
const getPokemon = require('json-pokemon'); 
const database = JSON.parse(getPokemon); 

App.use('/', Express.static('client/build')); 

// Name route
App.get('name/:name', function(req, res) {
  // Accessing what the user typed
  var pokeNameTyped = req.params.name; 
  // Using the number to get the correct pokemon
  var requestedPokemon = getPokemon.getPokemonByName(pokeNameTyped); 

  // Determining validity
  if (requestedPokemon == null) {
    // Name is invalid 
    res.send('No pokemon found'); 
    console.log(chalk.red(req.path)); 
  }

  else {
    // Name is valid 
    res.send(requestedPokemon); 
    console.log(chalk.green(req.path)); 
  }
}); 

// ID route 
App.get('/id/:id', function(req,res) {
  // Converting typed value to number
  var pokeID = Number(req.params.id); 
  // Using number to get pokemon
  var requestedPokemon = getPokemon.getPokemonById(pokeID); 

  // Determining validity
  if(requestedPokemon == null) {
    // ID is invalid
    res.send('No pokemon found'); 
    console.log(chalk.red(req.path)); 
  }

  else {
    // ID is valid
    res.send(requestedPokemon); 
    console.log(chalk.green(req.path)); 
  }
 });

 // Listening on server
 App.listen(80, function() {
   console.log('Server jogging!'); 
 });