// dependencies

const fs = require('fs');
const util = require('util');

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);


class AddDB {
    readFileSystem() {
        return asyncReadFile("db/db.json", "utf8")
    }

    writeFileSystem(data) {
        return asyncWriteFile("db/db.json", JSON.stringify(data));
    }

    readAllNotes() {
        //Returning the read files put into a new array because you cant spread JSON.parse
        return this.readFileSystem().then(data => {
            return [].concat(JSON.parse(data))
        })
    }

    writeAllNotes(data) {
        const newNote = {
            id: uuidv4(),
            title: data.title,
            text: data.text
        }
        console.log(newNote);
        //Changed from this.readFileSystem to readAllNotes so you have an array to spread the data
        return this.readAllNotes()
        .then(allNotes => [...allNotes, newNote])
        .then(notes => this.writeFileSystem(notes))
        .then(() => this.readFileSystem())
        
    // writeAllNotes(data) {
       
    //     console.log(data);
    //     //Changed from this.readFileSystem to readAllNotes so you have an array to spread the data
    //     return this.readAllNotes().then(allNotes => [...allNotes, newNote]).then(notes => this.writeFileSystem(notes)).then(() => this.readFileSystem())
    //     // first: read our file
    //     // second: create a temporary file
    //     // third: pushing the new note to allNotes
    //     // fourth: after we read the file, we write the previous file with our new file (override)
    //     // fifth: rereading allNotes again to display our new note on the page.
    }

    deleteNote(data) {
        return this.readAllNotes()
        .then(notes => { notes.indexOf(note => note.id !== id) })
        .then(notes => this.writeFileSystem(notes))
        .then(() => this.readAllNotes())
    }
}

module.exports = new AddDB();

