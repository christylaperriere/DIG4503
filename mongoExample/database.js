// Requiring MongoDB
const MongoDBClient = require("mongodb").MongoDBClient; 
// Using individual login information
const URL = "mongodb+srv://<christylaperriere>:<Bs9dzNDJNrWRz8tw>@cluster0-tc9sb.mongodb.net/";

// Taking our existing code and making an object out of it 
class Database {
  constructor() {

    this.collection = null; 


    // Want to connect to the database 
    // Taking code from index.js and putting it into constructor 
    MongoDBClient.connect(URL, (error, connection) => {
      // Testing for an error
      if(error) {
        // Whenever an error happens, if it is not handled, it is thrown
        // Stop the program and show the error to the user
        throw error; 
      }

      this.connection = connection;
    
    }); 
  }
}

// Export class
module.exports = Database; 