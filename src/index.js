import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var ProfileSchema = new Profiler.Schema({
    Username: String,
    Password: String,
    Gender: String,
    DOB: String
});
var url ='mongodb://localhost:28017/Profile';
var findDocuments = function(db, callback){
  var collection = db.collection('Players');

    collection.find().toArray(function(err,docs){
        console.log(docs);
        callback;
    })
}
var addData = function(db,callback){
    var data = findDocuments(db,function(){
        db.data();
    })
}
MongoClient.connect(url, function(err,db) {
    console.log("Connected successfully to server");
   findDocuments(db,function(){
        db.close();
   })
})
const overwatch = require('overwatch-api');
 
const platform = 'pc';
const region = 'us';
const tag = 'Calvin-1337';
 
overwatch.getProfile(platform, region, tag, (err, json) => {
  if (err) console.error(err);
  else console.log(json);
});
