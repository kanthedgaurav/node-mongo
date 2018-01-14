//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if(err) {
  return console.log('Unable to connect to MongoDB Server');
}
  console.log('Connecte to MongoDB server');

  // db.collection('Users').find({name: 'Himani'}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fecth todos',err);
  // });

  db.collection('Users').findOneAndUpdate( {
    _id: new ObjectID("5a5ab308dcb0ae2e601510c4")
  },{
    $set: {
      name: 'gaurav'
    }
    }, {
      returnOrginial: false
    
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
