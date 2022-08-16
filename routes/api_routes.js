// rquired packages
const note_router = require('express').Router()
const { response } = require('express')
const fs = require('fs')
const path = require ('path')

function getNotes() {
    return fs.promises.readFile('./db/db.json', 'utf8')
        .then(data => JSON.parse(data))
};

note_router.get('/notes', (req, res) => {
    getNotes()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

note_router.post('/notes', (req, res) => {
    getNotes()
    .then((notesList) => {
    var addNote = req.body
    notesList.push(addNote)
fs.promises.writeFile('./db/db.json', JSON.stringify(notesList))
    .then(() => {
        response.json(notesList)
        .catch(err => console.log(err))
    })
    })
})

module.exports = note_router

















// // routes to read and receive new notes

// module.exports = function(app) {
//     var notes;

//     app.get("/api/notes", (req, res) => {
//         fs.readFile("./db/db.json", (err, data) => {
//             if (err) throw err;
//             res.json(JSON.parse(data))
//         })
//     });

//     app.post("/api/notes", (req, res) => {
//         var addNote = req.body
//         fs.readFile("./db/db.json", (err, data) => {
//             var notes = JSON.parse()
//             notes.push(addNote);
//         })
//         fs.writeFile("./db/db.jsson", JSON.stringify(notes), () => {
//             if(err) throw err
//         })
//         res.json(addNote)
//     })
// }