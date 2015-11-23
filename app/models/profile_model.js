var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;


var profileSchema = new Schema({
	email: { type: String, required: true, unique: true },
 	password: { type: String, required: true },
 	first_name: {type: String, default: "First"},
 	last_name: {type: String, default: "Last"},
 	location: {type: String, default: "NYC"},
 	position: {type: String, default: "Position"},
 	secondary: {
 		position1:String,
 		position2:String,
 		position3:String
 	},
 	education: {type:String, default: "Education"},
 	statement: {type:String, defualt: ""},
 	links: {
 		facebook: {type:String,default:null},
 		vimeo: {type:String,default:null},
 		twitter: {type: String,default:null},
 		youtube: {type:String,default:null},
 		linkedin: {type:String,default:null},
 		imdb: {type:String,default:null},
 		personal: {type:String,default:null},
 		instagram: {type:String,default:null},
 		tumblr: {type:String,default:null}
 	},
 	resume:[String]	,
 	friends:[String],
 	open_jobs:[String],
 	//open jobs are still being staffed. 
 	closed_jobs:[String],
 	media: {
        ppic: {type: String, default: "561d2ad129ce7b0002b9331cppicsoundbite-clipart-filmreel.jpg"},
        cov: {type: String, default:"561d2ad129ce7b0002b9331ccovmovie-theater-screen-crop.jpg"},
        vid: {
        	isVimeo:Boolean,
        	link:String
        },
        pic: [String]
    }

 	//jobs worked are done, and in the past. are closed.
	
});

module.exports = mongoose.model('profile', profileSchema); //Name of the db.collection is "profiles", it makes it plural