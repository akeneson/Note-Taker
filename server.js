// The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.
//   * GET `*` - Should return the `index.html` file


// Module 04: Serving-HTML

// dependencies
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();

// set port to 8000
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // create server
// const server = http.createServer(handleRequest);

// // handelRequest function
// function handleRequest(req, res) {
//     console.log("handleRquest function called");
// }

// ============ROUTES=========
// referenced: Module 14 in express
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// ============Listener==========
// starts server
app.listen(PORT, function() {
    console.log("Server is listening on Por: " + PORT);
});