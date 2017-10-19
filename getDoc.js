let query = require('./query');

let MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
let url = 'mongodb://localhost:27017/truvoice_test';

module.exports = 
    MongoClient.connect(url)
    .then(function(db){
        return db;
    })
    .then(function(db){
        let res = query(db).toArray();
        db.close();
        return res;
    }).catch(function(e){
        console.log(e);
    });