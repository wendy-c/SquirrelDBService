var Sequelize = require('sequelize');

module.exports = function(db) {
  var User = db.define('users', {
  fbid:{
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  fbname: {
    type: Sequelize.STRING,
  },
  avatar: {
    type: Sequelize.STRING,
  },
});
  return User;
};
