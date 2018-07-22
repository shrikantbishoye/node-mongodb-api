// var {mongoose} = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((result) => {
        //console.log(result);
        res.send(result);
    }, (err) => {
        //console.log('error', err);
        res.status(400).send(err);
    })
});

app.post('/user', (req, res) => {
    var user = new User({
        username: req.body.userName,
        email: req.body.emailId
    });

    user.save( (doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
})




app.listen(3000, () => {
    console.log('server  started on port 3000');
})





