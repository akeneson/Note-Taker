// The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.
//   * GET `*` - Should return the `index.html` file


// Module 04: Serving-HTML

// dependencies
const http = require("http");
const fs = require("fs");
var express = require("express");

var app = express();

// set port to 8000
const PORT = 8080;

// create server
const server = http.createServer(handleRequest);

// handelRequest function
function handleRequest(req, res) {
    console.log("handleRquest function called");
}

// ============ROUTES=========
// referenced: Module 14 in express
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get ("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// ============Listener==========
// starts server
server.listen(PORT, function() {
    console.log("Server is listening on Por: " + PORT);
});