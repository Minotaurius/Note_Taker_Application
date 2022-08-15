// required packages

const { appendFile } = require('fs');
const path = require('path');

// routes to return index and notes html files, will pull into server.js
module.exports = function() {
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
};

