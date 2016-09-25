//this 'Likes' model refers to the number of Likes a USER
var Sequelize = require('sequelize');

module.exports = function(db) {
  var Like = db.define('Like', {
  like:{
    type: Sequelize.BOOLEAN,
  },
});
  return Like;
};
