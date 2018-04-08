const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Find by id and remove

// Todo.findByIdAndRemove('5ac9941b44094b085dcfc6dc').then((todo) => {
//   console.log(todo)
// })

//Find one and remove
// Todo.findOneAndRemove({completed: false}).then((result) => {
//   console.log(result)
// })

// Remove
Todo.remove({}).then((result) => {
  console.log(result)
})




