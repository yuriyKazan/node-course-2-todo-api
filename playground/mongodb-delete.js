const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
  // deleteMany
  /*
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      console.log(result);
  });
  */
  db.collection('Users').deleteMany({name: 'Yuriy'}).then((result) => {
      console.log(result);
  });
  // deleteOne
  /*
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      console.log(result);      
  });
  */
  // findOneAndDelete
  /*
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);      
  });
  */
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58ac3aa35c1158960d781731')}).then((result) => {
      console.log(JSON.stringify(result, null, 2));      
  });  
  //db.close();  
});