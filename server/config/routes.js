var helpers = require('./helpers');

module.exports = function(app){

  app.get('/test', helpers.test);

  app.post('/login/:userid', helpers.login);

  app.get('/links/:userid', helpers.getLinks);

  app.put('/links/:userid', helpers.putLinks);

  app.delete('/links/:userid', helpers.deleteLinks);

  app.get('/friends/:userid', helpers.friendsGet);

  app.put('/friends/:userid', helpers.friendsPut);

  app.put('/links/:friendid/:userid', helpers.putLinksFriend);
}