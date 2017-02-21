"use strict";
//const MongoClient = require('mongodb').MongoClient; //below is the same code
//const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

    /*
    db.collection('Todos').insertOne({
        test: 'Something to do.',
        complited: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo.', err);
        }   

        console.log(JSON.stringify(result.ops, null, 2));   
    });
    */
    /*
    db.collection('Users').insertOne({
        name: 'Yuriy',
        age: 36,
        location: 'UA'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo.', err);
        }   

        console.log(result.ops[0]._id.getTimestamp());   
    });
    */
    db.close();
    
});