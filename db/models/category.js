var Sequelize = require('sequelize');

module.exports = function(db) {
  var Category= db.define('categories', {
  category:{
    type: Sequelize.STRING,
    allowNull: false,
  },
});
  return Category
};
