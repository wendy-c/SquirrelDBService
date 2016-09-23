var Sequelize = require('sequelize');

module.exports = function(db) {
  var Link = db.define('links', {
  url: {
    type: Sequelize.STRING,
    allowNull: false, 
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  fbid: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  fbfriednid: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
});
  return Link;
};
