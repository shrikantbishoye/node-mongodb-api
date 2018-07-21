const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('unable to connect mongodb server');
    }
    
    console.log('sucessfully connected to mongodb server');
    const db = client.db('TodoApp')


    db.collection('users').findOneAndDelete({
        name: 'shrikant',
        _id: new ObjectID('5b5339d2306f763e803a7109')
    }).then((result) =>{
        console.log(result);
    })






   // client.close();

});








