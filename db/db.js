var Sequelize = require('sequelize');
var keys = require('./keys');

module.exports = function(sequelize){
  var db = new sequelize('squirrel', keys.username, keys.password, {
    host: 'localhost', // <==== how to set host with many instances of db? 
    dialect: 'mysql'
  })

  db.authenticate()
  .then(function(){
    console.log('sequelize connected to db!');
  })
  .catch(function(err){
    console.log('sequelize connection error');
  });
}
