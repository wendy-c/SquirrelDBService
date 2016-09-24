//format 'userid%username'

module.exports = {
  // test route for Postman and Mocha TDD
  test: function(req, res, next){
    console.log(req, 'req test!');
    res.sendStatus(200);
  },

  // user Login or create new user API //
  login: function(req, res, next){
    
  },

  // user request API // 
  getLinks: function(req, res, next){

  },

  putLinks: function(req, res, next){

  },

  deleteLinks: function(req, res, next){

  },

  friendsGet: function(req, res, next){

  },

  friendsPut: function(req, res, next){

  },

  //put new link into friends folder
  putLinksFriend: function(req, res, next){

  },
}