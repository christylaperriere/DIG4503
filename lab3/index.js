const Express = require("express");
const App = Express(); 
const port = 80;

//route that sends string "Hello World!"
App.get("/", function(Request, Response) {
    Response.send("Hello World");
});

//route that serves files from public directory
App.use("/public", Express.static("public"))

//creating an express server
App.listen(port, function() {
    console.log("Server Running.");
}); 