// The following HTML routes should be created:
//   * GET `/notes` - Should return the `notes.html` file.
//   * GET `*` - Should return the `index.html` file


// Module 04: Serving-HTML

// dependencies
const http = require("http");
const fs = require ("fs");

// set port to 8000
const PORT = 8080;

// create server
const server = http.createServer(handleRequest);

