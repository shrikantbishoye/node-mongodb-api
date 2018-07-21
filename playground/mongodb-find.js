const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('unable to connect mongodb server');
    }
    
    console.log('sucessfully connected to mongodb server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b5370bbd66cab69e5559479')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to featch data', err);
    // })

    db.collection('users').find({name: 'shrikant'}).count().then((c) => {
        console.log(`total count is  ${c}`);
    }, (err) => {
        console.log('unable to featch data', err);
    })






   // client.close();

});








