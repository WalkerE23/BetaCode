// admin_model.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdminSchema = new Schema({
	owner_name:String,
	open_jobs:[String]
});

module.exports = mongoose.model('AdminObj', AdminSchema); 
