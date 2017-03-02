var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//'mongodb://admin:123456@ds115110.mlab.com:15110/mydb'  process.env.MONGODB_URI process.env.PORT y = x > 0 ? 1 : -1;
mongoose.connect(process.env.PORT ? 'mongodb://admin:123456@ds115110.mlab.com:15110/mydb' : 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};