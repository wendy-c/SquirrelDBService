var Sequelize = require('sequelize');

module.exports = function(db) {
  var Tag = db.define('tags', {
  tag:{
    type: Sequelize.STRING,
    allowNull: false,
  },
});
  return Tag;
};
