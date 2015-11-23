var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OpenJobSchema = new Schema({
	adminJob:true,
	owner_name: String,
	name: String,
	location: String,
	email: String,
	contact_email: String,
	startDate: Date,
	endDate: Date,
	noDate: {type: Boolean, default:false},
	about_statement:String,
	type: String,
	positions_to_fill:[{
		position: String,
		payment: Number,		
		pay_rate: String,
		payNegotiable:{type:Boolean,default:false},
		notes:String,
		experience: String,
		equipment: String,
		filledBy: {type: String, default:""}
	}],
	important_people:{
		producer: {type:String,default:null},
		director: {type:String,default:null},
		writer: {type:String,default:null}
	},
	media:{
		pics:[String]
	}
});

module.exports = mongoose.model('openjob', OpenJobSchema); //Name of the db.collection is "Jobs", it makes it plural
