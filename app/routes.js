var g_ss = require('./controllers/GeneralCtrl_ss');


module.exports = function(app){

	app.put('/api/getCode',g_ss.getCode);
	app.get('/api/adminJobs',g_ss.getAllAdminJobs);
	app.post('/api/createNewJob',g_ss.createNewJob);
   
};