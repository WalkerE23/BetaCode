// GeneralCtrl_ss.js


var betacode = require('../models/betacode_model.js')
var RandomCodes = require('random-codes');
var config = {
    // A string containing available chars 
    chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    
    // Separator char used to divide code parts 
    separator: '-',
    
    // Char used to mask code 
    mask: '*',
    
    // Number of parts the code contains 
    parts: 3,
    
    // Size of each part 
    part_size: 4,
    
    // Function used to get a random char from the chars pool  
    // (Please use a better one)  
    getChar: function (pool) {
        var random = Math.floor(Math.random() * pool.length);
        return pool.charAt(random);
    }
};
var rc = new RandomCodes(config);


module.exports.getCode = function(req,res){
	console.log("hi?");
	var obj = {
		firstName: req.body.firstName,
		lastName:  req.body.lastName,
		code:      rc.generate()
	}
	console.log(obj);
	var b = new betacode(obj);
	b.save(function(err,result){
		if(!err && result){
			res.send({success:true,obj:result});
		}
	});
}



