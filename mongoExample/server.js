const Express = require("express"); 
const App = Express();
const port = 80; 
const Database = require("./database.js"); 

let database = new Database(); 

App.get("/movies/name/:name", (req, res) => {
  // Getting the data 
}); 

App.get("/movies/score/:name", (req, res) => {
  // Getting the data
  // Handling error case 
  let result = {"error": "Could not find!"};

  // Finding movie with specified score (in index.js)
  let movie = databse.findScore(req.params.score); 

  // If movie was found
  if (movie != null) {
    result = movie; 
  }

  // Always has to be a response
  res.json(result); 
}); 

App.listen(port, () => {

});