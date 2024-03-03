require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const logger = require('morgan')

const plantsRouter = require('./routes/plants')
const favoritesRouter = require('./routes/favorites')

const app = express()

// TODO: uncomment once db setup
// mongoose.connect(process.env.DATABASE_URL)


app.use(logger('dev'));
app.use(cors())
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: false
}));

//Routes:
app.use('/plants', plantsRouter)
app.use('/favorites', favoritesRouter)


app.listen(3001, () => {
    console.log("server running on port 3001")
})