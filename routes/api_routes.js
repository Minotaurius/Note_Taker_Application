const html_router = require('express').Router()
const note_router = require('express').Router()
const fs = require('fs')
const path = require ('path');

html_router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'), 'utf-8', (err, data) => {
        if(err) console.log(err)
        console.log('Loading Index.html file')
    })
});

html_router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'), 'utf-8', (err, data) => {
        if(err) console.log(err)
        console.log('Loading notes.html file')
    })
});

note_router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err) console.log(err)
        let allNotes = JSON.parse(data)
        res.send(allNotes)
    })
})

note_router.post('/notes', (req, res) => {
    var newNote = {
        title: req.body.text,
        text: req.body.text
    }
    fs.readFile('./db/.db.json', (err, data) => {
        if (err) console.log(err)
        let totalNotes = JSON.parse(data)
        totalNotes.push(newNote)
        return totalNotes
    })
    var scribeAllNotes = JSON.stringify(totalNotes)
    fs.writeFile('./db/.db.json', scribeAllNotes, (err, data) => {
        if(err) console.log(err)
    })
});

module.exports = { note_router: note_router, html_router: html_router }















// function getNotes() {
//     return fs.promises.readFile('./db/db.json', 'utf8')
//         .then(data => JSON.parse(data))
// };

// note_router.get('/notes', (req, res) => {
//     fs.promises.readFile('./db/db.json', (err, data) => {
//         if (err) console.log(err)
//         let noteData = JSON.parse(data)

//         res.send(noteData)
//     })
    // getNotes()
    // .then(data => res.json(data))
    // .catch(err => console.log(err))
// })

// note_router.post('/notes', (req, res) => {
//     const newNote = {
//         title: req.body.title,
//         text: req.body.text
//     };

//     fs.readFile('./db/db.json', (err,data) => {
//         if (err) console.log(err)
//         let noteData = JSON.parse(data)
//         noteData.push(newNote)

//     })
//     getNotes()
//     .then((notesList) => {
//     var addNote = req.body
//     notesList.push(addNote)
// fs.promises.writeFile('./db/db.json', JSON.stringify(notesList))
//     .then(() => {
//         response.json(notesList)
//         .catch(err => console.log(err))
//     })
//     })
// })

// module.exports = note_router

















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