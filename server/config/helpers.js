//format 'userid%username'
var User = require('../../db/models/user');
var Link = require('../../db/models/link');

module.exports = {
  // test route for Postman and Mocha TDD
  test: function(req, res, next){
    console.log(req, 'req test!');
    res.sendStatus(200);
  },

  // user Login or create new user API //
  login: function(req, res, next){
    var userID = req.body.userID;
    var userName = req.body.name;
    User.findOne({fbid: userID})
      .then(function(user){
        if(user){
          res.sendStatus(200);
        } else {
          User.create({fbid: userID, fbname: userName})
            .then(function(user){
              console.log(userName + ' added to database');
              res.sendStatus(201);
            })
        }
      })
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