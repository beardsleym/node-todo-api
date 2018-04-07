const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ac84cbc2ecba0098d4605d8';
var id = '5ac746963e3e221b76a3c0e511';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }

User.findById(id).then((user) => {
  if(!user) {
    return console.log('No user found')
  }
    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log('There was an error fetching the user')
})

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo)
// })

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo by Id: ', todo)
// }).catch((e) => console.log(e));