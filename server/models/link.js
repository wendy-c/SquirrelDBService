var Link = sequelize.define('link', {
  url: {
    type: Sequlize.STRING,
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
}, {
  tablename: 'links'
});

module.exports = Link; 