// var mongoose = require('mongoose');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
module.exports = {mongoose}
