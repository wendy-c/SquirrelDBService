var helpers = require('./helpers');

module.exports = function(app) {

  app.get('/redis', helpers.getMostRecent);

  app.post('/login/:userid', helpers.login);

  app.get('/links/:userid', helpers.getLinks);

  app.get('/links/friends/:friendid', helpers.getFriendsLinks);

  app.put('/links/:userid', helpers.putLinks);

  app.delete('/links/:userid', helpers.deleteLinks);

  app.get('/friends/:userid', helpers.friendsGet);

  app.get('/friends/nameOnly/:userid', helpers.friendsGetNameOnly);

  app.put('/friends/:userid', helpers.friendsPut);
  //may need to modify endpoint below.. may just route to app.put/links?
  app.put('/links/friends/:friendid/:userid', helpers.putLinksFriend);

  app.get('/search/:friend', helpers.searchFriends);

  app.put('/likes', helpers.putLike);

};