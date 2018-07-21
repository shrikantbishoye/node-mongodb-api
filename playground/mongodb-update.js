const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('unable to connect mongodb server');
    }
    
    console.log('sucessfully connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b5370bbd66cab69e5559479')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b5399f5b357a7455cbea77a')
    }, {
        $set: {
            location: 'Thane',
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });









   // client.close();

});








