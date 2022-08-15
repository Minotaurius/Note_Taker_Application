// pulling in our packages
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');
const db = require('./db/db.json')

const api_routes = '';
const note_routes = ''

// sharing static/public files

app.use(express.static(path.join(__dirname, 'public')));

// attach front end to our req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// load our routes

app.use('/', api_routes)
app.use('/', note_routes)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})