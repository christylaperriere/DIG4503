const Express = require("express");
const App = Express();
const port = 80;

const MongoClient = MongoDB.MongoClient;

const URL = "mongodb+srv://<christylaperriere>:<Bs9dzNDJNrWRz8tw>@cluster0-tc9sb.mongodb.net/";


MongoClient.connect(URL, (error, connection) => {
  if(error) {
    throw error; 
  }

  let database = connection.db("DIG4503-78"); 
  let collection = database.collection("Movies");
})

const CORS = require("cors");
App.use(CORS());

App.get("/movies/title/:title", (req, res) => {
  let result = {"error": "Could not find movies!"};

  // Do something if you find a match
  if(collection != null) {
    // template literal
    // want to search for the value of the string entered by the user
    collection.find({"title": `/${req.params.title}`})
    .limit(100)
    .toArray()
    .then((cursorArray) => {
      
      if(cursorArray.length != 0) {
        result = cursorArray;
      }
      res.json(result); 
    }); 
  } else {
    res.json(result); 
  }
})