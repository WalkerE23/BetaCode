var g_ss = require('./controllers/GeneralCtrl_ss');


module.exports = function(app){

	app.put('/api/getCode',g_ss.getCode);
   

};