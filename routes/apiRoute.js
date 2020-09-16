// dependencies
const router = require("express").Router();
const { fstat } = require("fs");
const path = require("path");

const AddDB = require("../db/add");

// read
router.get("/notes", (req, res) => { 
    AddDB.readAllNotes().then(notes=> res.json(notes)).catch(err=>console.log(err))
    // 1) reads all notes
    // 2) json reads the note in completion
    // 3) if theres an error, throw error

} )
router.post("/notes", (req, res) => { 
    AddDB.writeAllNotes(req.body).then(notes=> res.json(notes)).catch(err=>console.log(err))
} )

// delete
router.delete("/notes/:id", (req, res) => { 
    AddDB.deleteNote(req.params.id).then(notes=> res.json(notes)).catch(err=>console.log(err))
} )


module.exports = router;