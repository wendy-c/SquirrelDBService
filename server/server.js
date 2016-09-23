var app = require('express')();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./config/routes');
var Sequelize = require('sequelize');


//instantiate db ORM
var db = require('../db/db-config').db;
db.authenticate()
.then(function(){
  console.log('sequelize connected to db!');
})
.catch(function(err){
  console.log('sequelize connection error');
});

//force sync (drop all tables! be carefuL!)
db.sync({force: true});
//connect middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//connect routes
routes(app);

//set env variables 
var port = process.env.PORT || 8888;

app.listen(port, function(){
  console.log('app listening on port ' + port);
})