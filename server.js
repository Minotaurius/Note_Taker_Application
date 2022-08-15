// pulling in our packages
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

const api_routes = '';

// sharing static/public files

app.use(express.static(path.join(__dirname, 'public')));

// attach front end to our req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// load our routes
require("./routes/html_routes")(app)
require("./routes/api_routes")

// app.use('/', api_routes)

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})