var Sequelize = require('sequelize');
var keys = require('./keys');

// var sequelize = new Sequelize('squirrel', keys.username, keys.password, {
//   host: 'localhost', // <==== how to set host with many instances of db? 
//   dialect: 'mysql'
// })

// sequelize.authenticate()
//   .then(function(){
//     console.log('sequelize connected to db!');
//   })
//   .catch(function(err){
//     console.log('sequelize connection error');
//   });

//   module.exports = sequelize;

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
