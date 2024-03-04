require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const logger = require('morgan')

const plantsRouter = require('./routes/plants')
const favoritesRouter = require('./routes/favorites')
const userRouter = require('./routes/user')

const app = express()

mongoose .connect(process.env.DATABASE_URL)   
.then(() => console.log("Connected to Mongo Server!"))
.catch(err => console.log(err));

const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});


app.use(logger('dev'));
app.use(cors())
app.use(express.json())

app.use(session({
    secret: 'my-random-express-session-secret',
    resave: false,
    saveUninitialized: false
}));

//Routes:
app.use('/plants', plantsRouter)
app.use('/favorites', favoritesRouter)
app.use('/user', userRouter)


app.listen(3001, () => {
    console.log("server running on port 3001")
})