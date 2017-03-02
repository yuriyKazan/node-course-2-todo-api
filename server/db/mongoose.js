var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:123456@ds115110.mlab.com:15110/mydb' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};