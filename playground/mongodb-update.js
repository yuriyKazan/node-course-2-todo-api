const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  /*
  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('58adb80d15b3ecae4b128455')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('58ac3a965c1158960d781730')
    }, {
        $set: {
            name: 'Yuriy'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
  //db.close();  
});