
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5a5d15ae96a45f502a26ed01';

if(!ObjectID.isValid(id)) {
    console.log('Id is not valid');
};

// Todo.find({
//     _id: id
// }).then ((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('todos', user)
}).catch((e) => console.log(e));