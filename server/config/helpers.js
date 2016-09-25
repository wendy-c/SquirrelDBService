//format 'userid%username'
var User = require('../../db/db-config').User;
var Link = require('../../db/db-config').Link;

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
      .catch(function(err){
        console.log('login database err');
      })
  },

  // user request API // 
  getLinks: function(req, res, next){
    var userID = req.params.userid;

    Link.findAll({where:{
      owner: userID,
    }})
    .then(function(data){
      var mapped = data.map(function(curr){
        return curr.dataValues;
      });
      res.send(mapped);
    })
    .catch(function(err){
      console.log('could not get Links from database: db error');
    });
  },
  // add link to user // 
  putLinks: function(req, res, next){
    var userID = req.params.userid;

    Link.create({url: req.body.url, owner: userID, assignee: userID})
      .then(function(link){
        console.log('new link saved in putLinks');
        res.sendStatus(201);
        //should we be sending back the link to user for any reason? 
      })
      .catch(function(err){
        console.log('new link could not be saved in putLinks');
      })
  },
  // delete specific link from user //
  deleteLinks: function(req, res, next){
    var userID = req.params.userid;
    //make sure we only delete the instance where owner AND assignee are the same
    Link.findAll(
      {where: {
        url: req.body.url,
        owner: userID,
        assignee: userID,
      }
    })
    .then(function(found){
      //delete all duplicates of this instance
      return found.forEach(function(link){
        link.destroy();
      })
    })
    .then(function(){
      res.send('link deleted');
    })
    .catch(function(err){
      console.log('delete Links service error');
    })
  },

  friendsGet: function(req, res, next){
    var userID = req.params.userid;

    // User.findAll({
    //  include: [{
    //     model: User,
    //     where: {
    //       'User.fbid': userID
    //     }
    //   }]
    // })
    // .then(function(data){
    //   console.log(data);
    // })
    // .catch(function(err){
    //   console.log('friend get error', err);
    // });
  },

  friendsPut: function(req, res, next){

  },

  //put new link into friends folder
  putLinksFriend: function(req, res, next){

  },
}