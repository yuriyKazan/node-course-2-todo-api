require('./config/config');

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }
    Todo.findById(req.params.id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        return res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
    
});

app.delete('/todos/:id', (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(req.params.id).then((todo) => {
        if (!todo) {
            return res.status(404).send(todo);
        }

        res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
      
});

app.patch('/todos/:id', (req, res) => {

    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send();
    }    

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(req.params.id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});

app.post('/users', (req, res) => {
    var user = new User(_.pick(req.body, ['email', 'password']));

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};