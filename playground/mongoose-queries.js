const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '58af1001c4af49142e1d59cd';
/*
var id = '58b5af19555d16c420104e5111';

if (!ObjectID.isValid(id)) {
    console.log('Id not valid.');
}
*/
/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});
*/
/*
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found.')
    }
    console.log('Todo By Id.', todo);
}).catch((e) => console.log(e));
*/

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found.')
    }
    console.log('User', user);
}).catch((e) => console.log(e));