// pulling in our packages
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

const routes = require('./routes/api_routes')

// const html_router = require('./routes/api_routes')
// const note_router = require('./routes/api_routes')

// sharing static/public files

app.use(express.static(path.join(__dirname, 'public')));

// attach front end to our req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// load our routes
// require("./routes/html_routes")(app)
// require("./routes/api_routes")
// app.get('/', (req, res) => {
//     res.sendFile(__dirname, '/public/index.html')
// })

app.use('/', routes.html_router)
app.use('/api', routes.note_router)

// app.get('/notes', (req, res) => {
//     res.sendFile(__dirname, '/public/notes.html')
// })

// app.use('/')


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})