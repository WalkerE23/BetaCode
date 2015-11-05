//server.js


//Dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var methodOverride = require('method-override');


var mongoose = require('mongoose');

var passport = require('passport');


var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var jwt 		 = require('jsonwebtoken');

var db = require('./config/db');
//connect to mogoDB database
mongoose.connect(db.url); 

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());//get all data of the body of the (POST) parameters
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));// set the static files location /public/img will be /img for users
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(session({secret:'leslie'}));
app.use(passport.initialize());
app.use(passport.session());



//CONFIG ROUTES
require('./app/routes')(app);
//CONFIG PASSPORT


app.use(function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
 
//START APP
app.listen(port);
console.log("Server Running on Port: " + port);

//expose app
exports = module.exports = app;
