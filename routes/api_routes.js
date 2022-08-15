// rquired packages

const fs = require('fs')

// routes to read and receive new notes

module.exports = function() {
    var notes;

    app.get("api/notes", (req, res) => {
        fs.readFile("../db/db.json", () => {
            if (err) throw err;
            res.json(JSON.parse(data))
        })
    });

    app.post("/api/notes", (req, res) => {
        var addNote = req.body
        fs.readFile("../db/db.json", () => {
            var notes = JSON.parse()
            notes.push(addNote)
        })
        fs.writeFile("../db/db.jsson", JSON.stringify(notes), () => {
            if(err) throw err
        })
        res.json(addNote)
    })
}