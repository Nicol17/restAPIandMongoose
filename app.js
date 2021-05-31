const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const app = express();

// IMPORT ROUTES
const booksRoute = require('./routes/books')

// MIDDLEWARE
app.use(bodyParser.json())
app.use(cors());
app.use('/books', booksRoute);



// ROUTES

app.get('/', (req, res) => {
    res.send("WE HOME BABY!");
});




//CONNECT to DATABASE

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log(`Connected to DB!!!!`)
})

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server listening on port ${PORT} ...`))