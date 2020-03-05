// Requiring MongoDB
const MongoDBClient = require("mongodb").MongoDBClient; 
// Using individual login information
const URL = "mongodb+srv://<christylaperriere>:<Bs9dzNDJNrWRz8tw>@cluster0-tc9sb.mongodb.net/";

MongoDBClient.connect(URL, function(error, connection) {
  // Testing for an error
  if(error) {
    // Whenever an error happens, if it is not handled, it is thrown
    // Stop the program and show the error to the user
    throw error; 
  }

  // Getting a connection object 
  let database = connection.db("DIV4503-78"); 
  let collection = database.collection("Movies"); 

  let result = collection.findOne({
    // Find the movie with the following score
    "score": 79
  }, {}, (error, result) => {
    console.log(result); 
  }); 

  // Last step will always be to close the connection
  connection.close(); 

}); 