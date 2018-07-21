const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('unable to connect mongodb server');
    }
    
    console.log('sucessfully connected to mongodb server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'something to do in this app',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('users').insertOne({
        name: 'shrikant',
        age: 24,
        location: 'Mumbai'
    }, (err, result) => {
        if(err) {
            return console.log('unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })





    client.close();

});








