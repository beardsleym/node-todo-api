// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const mongoLab = require('../../../secret/mongoLab.js')

// MongoClient.connect('mongodb://localhost/TodoApp', (err, client) => {
MongoClient.connect(`mongodb://${mongoLab.mLab}.mlab.com:27199/todoapp`, (err, client) => {
// MongoClient.connect(`mongodb://${mongoLab.digitalOcean}/todoapp`, (err, client) => {
  
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');
  const db = client.db('todoapp')
    
//Delete Many    
// db.collection('Users').deleteMany({name: "Trudy"}).then((result) => {
//   console.log(result);
// })
 
 //Delete One
db.collection('Todos').deleteOne({completed: false}).then((result) => {
  console.log(result);
})
  // Find One and Delete
db.collection('Todos').findOneAndDelete({_id: new ObjectID('5ac7369ffdc72e19a3df3333')}).then((result) => {
  console.log(result);
})
  // client.close();
});