var helpers = require('./helpers');

module.exports = function(app){

  app.get('/test', helpers.test);

}