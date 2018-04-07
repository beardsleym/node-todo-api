
// Firestore todo save test
const admin = require('firebase-admin');

var serviceAccount = require('../../../secret/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

//Add a new document called todos, it will overwrite if used again
// var newTodo = db.collection('todoapp').doc('todos').set({
//     text: 'Watch chappie',
//     completed: false,
//     completedAt: null
// });

// Add a new document with a generated id.
// var newTodo = db.collection('todos').add({
//     text: 'Eat dinner',
//     completed: false,
//     completedAt: null
// }).then((ref) => {
//     console.log('Added document with ID: ', ref.id);
// });

// Add a new document with a generated id.
var newUser = db.collection('users').add({
    name: 'Matthew',
    age: 27,
    location: 'Singapore'
}).then((ref) => {
    console.log('Added document with ID: ', ref.id);
});

//Show documents where test == play games
db.collection('todos').where('completed', '==', true).get().then((snapshot) => {
        snapshot.forEach(doc => {
            console.log(doc.data().text);
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });




    
    // db.collection('Users').insertOne({
    //   name: 'Trudy',
    //   age: 27,
    //   location: 'Melbourne'
    // }, (err, result) => {
    //   if(err) {
    //     return console.log(err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    // });
    // client.close();
// });