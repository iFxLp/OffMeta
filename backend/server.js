const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configures our environment to the dot env file
require('dotenv').config();

//How we create our express server
const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json()); //allows us to parse json files

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
   );
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

//routes
const exercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
//starts the server, listens
app.listen(port, () => {
    console.log('Server is running on port: ',port );
});