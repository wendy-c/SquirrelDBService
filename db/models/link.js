var Sequelize = require('sequelize');

module.exports = function(db) {
  var Link = db.define('links', {
  url: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  owner: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  assignee: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
});
  return Link;
};
