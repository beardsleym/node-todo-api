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
    
  // Find One and Update
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5ac738e68907d11a29973766')
  },{
    $set: {
      completed: true
    }
  },{
     returnOriginal: false 
    }).then((result) => {
      console.log(result);
    })
    
db.collection('Users').findOneAndUpdate(
  {_id: new ObjectID('5abc8a2604a5231c36957fd7')},
  { $set: {name: 'Matthew'},
      $inc: { age: -5 }
  },
  {returnOriginal: false}
)    
  // client.close();
});