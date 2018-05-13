var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var userSchema = new Schema({
    login: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('User', userSchema );