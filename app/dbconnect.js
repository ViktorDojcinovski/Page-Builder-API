//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://viktor:GZs6LL_2RpjZHim@ds251902.mlab.com:51902/page_builder';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

module.exports = mongoose.connection;   