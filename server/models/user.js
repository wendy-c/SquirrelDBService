var Link = require('./link');

var User = sequelize.define('user', {
  fbid: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  fbname: {
    type: Sequlize.STRING,
  }
}, {
  tablename: 'users'
});

User.hasMany(Link);

module.exports = User; 