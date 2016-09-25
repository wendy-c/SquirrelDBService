var Sequelize = require('sequelize');
var keys = require('./keys');

var db = new Sequelize('squirrel', keys.username, keys.password, {
  host: 'localhost', // <==== how to set host with many instances of db? 
  dialect: 'mysql'
})

var Link = require('./models/link')(db);
var User = require('./models/user')(db);
var Category = require('./models/category')(db);
var Like = require('./models/like')(db);
var Tag = require('./models/tag')(db);
// var FriendShip = require('./models/friend')(db);

// set up relationship
//User can have many Link... a Link belongs to User. One-to-Many user#addLink
User.hasMany(Link);
Link.belongsTo(User);

//A Category can have many Link... a Link belongs to one Category. One-to-Many category#addLink <== adds categoryID to Link instance
Category.hasMany(Link);
Link.belongsTo(User);

//A Link can have many Tags... a Tag belongs to a Link?
Link.hasMany(Tag);
Tag.belongsTo(Link);

//A Like belongs to one Link.... a Like belongs to one user...?
Like.belongsTo(User); //<==TODO finish relationship here!

//A User belongs to many Users and vice-versa as Friend Many-to-Many user#addFriend
User.belongsToMany(User, {as: 'friend', through: 'friendship'}); // can i specify through: Friend Model?

// export db and models for use in other modules 
module.exports = {
  db: db,
  Link: Link,
  User: User,
  Tag: Tag,
  Like: Like,
  Category: Category,
}