const MongoClient = require('mongodb').MongoClient;

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

  db.collection('Users').find({name: 'Himani'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
    
  }, (err) => {
    console.log('Unable to fecth todos',err);
  });
  db.close();
});
