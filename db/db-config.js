var Sequelize = require('sequelize');
var keys = require('./keys');

var db = new Sequelize('squirrel', keys.username, keys.password, {
  host: 'localhost', // <==== how to set host with many instances of db? 
  dialect: 'mysql'
})

var Link = require('./models/link')(db);
var User = require('./models/user')(db);
// var FriendShip = require('./models/friend')(db);

// set up relationship
User.hasMany(Link);
Link.belongsTo(User, {as:'linke', through: 'test'});


User.belongsToMany(User, {as: 'friend', through: 'friendship'});

// FriendShip.belongsTo(User, {foreignKey: 'fbid'}); //A friendship is a UNIQUE relationship that only ONE user can have!

// export db and models for use in other modules 
module.exports = {
  db: db,
  Link: Link,
  User: User,
  // FriendShip: FriendShip, 
}