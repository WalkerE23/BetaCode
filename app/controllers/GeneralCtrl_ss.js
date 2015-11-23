// GeneralCtrl_ss.js


var betacode = require('../models/betacode_model.js');
var OpenJob = require('../models/openjob.js');
var Admin = require('../models/admin_model.js');
var Profile = require('../models/profile_model.js');
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

module.exports.createNewJob = function(req,res){
    admin_id = "56424a2ad4477d730b70494b";
    var job = new OpenJob(req.body);
    job.save(function(err,result){
        if(!err&&result){
            console.log("saved" + result);
            res.send({success:true});
            // Admin.findOneAndUpdate({_id: admin_id},
            //     {$push:{'open_jobs': result._id}},function(err, prof){
            //             if(!err&&prof){
            //                 res.send({success:true});
            //             }
            // });
        }
    });
}

module.exports.getAllAdminJobs = function(req,res){
    Admin.find({_id:"56424a2ad4477d730b70494b"},function(err,result){
        if(!err&&result[0]){
            idToOpenJobData(result[0].open_jobs,function(newList){
                console.log(newList);
                if(newList){
                res.send({success:true,obj:newList});
            }
            });
        }
    })
}

 module.exports.showProfiles = function(req,res){
    Profile.find({},function(err,result){
        if(!err){
            res.send({success:true,obj:result});
        }
        else{
            res.send({success:false});
        }
    });
 }



var idToOpenJobData = function(listFromAdmin,cb){
    console.log(listFromAdmin);
    var id_list = listFromAdmin;
    if(id_list == undefined){return null};
    var data_list = [];
    var toGo = id_list.length;
    var onComplete = function(){
        console.log(data_list);
        cb(data_list);
    };
    if(toGo === 0){
        onComplete();
    }
    else{
        for(var i = 0; i < id_list.length;i++){
            OpenJob.find({_id: id_list[i]},function(err,open_job){
                if(!err && open_job[0]){
                    var tempData = {
                        id: open_job[0]._id,
                        name: open_job[0].name,
                        location: open_job[0].location,
                        startDate: open_job[0].startDate,
                        endDate: open_job[0].endDate,
                        pic: open_job[0].media.pics[0]
                    };
                 data_list.push(tempData);

                    if(--toGo === 0){
                        onComplete();
                    }
                }
                else{
                    console.log(err);
                }
            });
        }
    }
}



