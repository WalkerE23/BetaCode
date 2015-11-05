var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var codesAndNames = new Schema({
	firstName:String,
	lastName:String,
	code:String
});

module.exports = mongoose.model('codesAndNames', codesAndNames); //Name of the db.collection is "codesAndNames", it makes it plural
