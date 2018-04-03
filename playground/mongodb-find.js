

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const mongoLab = require('../../../secret/mongoLab.js')

// MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
// MongoClient.connect(`mongodb://${mongoLab.mLab}.mlab.com:27199/todoapp`, (err, client) => {
MongoClient.connect(`mongodb://${mongoLab.digitalOcean}/todoapp`, (err, client) => {
  
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('todoapp')
    
  // db.collection('Todos').find({
  //   _id: new ObjectID('5abc759e6bbd111ae4541ea9')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  
  db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
  // client.close();
});