var Sequelize = require('sequelize');
var keys = require('./keys');

var db = new Sequelize('squirrel', keys.username, keys.password, {
  host: 'localhost', // <==== how to set host with many instances of db? 
  dialect: 'mysql'
})

var Link = require('./models/link')(db);
var User = require('./models/user')(db);


// set up relationship
User.hasMany(Link);
Link.belongsTo(User);

module.exports = {
  db: db,
  Link: Link,
  User: User,
}