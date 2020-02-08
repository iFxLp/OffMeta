const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.nextTick.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
 console.once('open', () => {
     console.log("MongoDB databse connection established successfully");
 })

app.listen(port, () => {
    console.log('Server is running on port : ',port);
});