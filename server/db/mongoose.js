var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//'mongodb://admin:123456@ds115110.mlab.com:15110/mydb'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};