// Module 04: Serving-HTML

// dependencies
// const fs = require("fs");
const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoute");


const app = express();

// set port to 80
const PORT = process.env.PORT ||80;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// // create server
// const server = http.createServer(handleRequest);

// // handelRequest function
// function handleRequest(req, res) {
//     console.log("handleRquest function called");
// }

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




// ============Listener==========
// starts server
app.listen(PORT, function() {
    console.log("Server is listening on Port: " + PORT);
});