// Requiring express
const Express = require('express');
const App = Express(); 
// Requiring chalk
const chalk = require('chalk'); 

const port = 80; 

// Requiring cors
const cors = require('cors'); 
App.use(cors()); 


// Requiring chalk
const chalk = require('chalk'); 

// Requiring pokemon
const getPokemon = require('json-pokemon'); 
const pokemons = require('json-pokemon/getPokemon'); 

App.use('/', Express.static('client/build')); 

// Name route
App.get('name/:name', function(req, res) {
  // Accessing what the user typed
  var pokeNameTyped = req.params.name; 
  // Using the number to get the correct pokemon
  var requestedPokemon = getPokemon.getPokemonByName(pokeNameTyped); 

  let result = {'Error': 'No pokemon was found'};

  // Determining validity
  if (requestedPokemon != null) {
    result = requestedPokemon;
    console.log(chalk.green(req.path)); 
  }

  else {
    // Name is invalid 
    console.log(chalk.red(req.path)); 
  }
  res.json(result); 
}); 

// ID route 
App.get('/id/:id', function(req,res) {
  // Converting typed value to number
  var pokeID = Number(req.params.id); 
  // Using number to get pokemon
  var requestedPokemon = getPokemon.getPokemonById(pokeID); 

  // Check for error 
  let result = {'Error': 'No pokemon was found'};

  // Determining validity
  if(requestedPokemon != null) {
    result = requestedPokemon;
    console.log(chalk.green(req.path)); 
  }

  else {
    // ID is invalid
    console.log(chalk.red(req.path)); 
  }
  
  res.json(result); 
 });

 // Listening on server
 App.listen(port, () => {
   console.log("server jogging!");
 });