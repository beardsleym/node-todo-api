// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const mongoLab = require('../../../secret/mongoLab.js')

// MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
MongoClient.connect(`mongodb://${mongoLab.mLab}.mlab.com:27199/todoapp`, (err, client) => {
// MongoClient.connect(`mongodb://${mongoLab.digitalOcean}/todoapp`, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
    console.log('Connected to MongoDB server');
    const db = client.db('todoapp')
    
    db.collection('Todos').insertOne({
      text: 'Take a plane somewhere',
      completed: false
    }, (err, result) => {
      if(err){
        return console.log('Unable to insert todo', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    })
    
    
    db.collection('Users').insertOne({
      name: 'Trudy',
      age: 27,
      location: 'Melbourne'
    }, (err, result) => {
      if(err) {
        return console.log(err);
      }
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    });
    client.close();
});