var app = require('express')();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./config/routes');
var Sequelize = require('sequelize');

//== test data base ===//
var User = require('../db/db-config').User;
var Link = require('../db/db-config').Link;
var Tag = require('../db/db-config').Tag;
var Like = require('../db/db-config').Like;
var Category = require('../db/db-config').Category;
//instantiate db ORM
var db = require('../db/db-config').db;

db.authenticate()
.then(function(){
  console.log('connected to db');
  User.findOne({fbname: "Michael Wong"})
    .then(function(user){
      console.log(user.addLink);
      Link.findOne({owner: user.dataValues.fbid, assignee: user.dataValues.fbid,})
      .then(function(link){
        Like.create({like: true})
        .then(function(like){
          like.setLink(link);
          like.setUser(user);
        });
      })

    })

  // User.findOne({where: {
  //   fbname: "Michael Wong"
  //   }
  // })
  // .then(function(user){
  //   Link.create({url:'www.espn.com', owner:user.fbid, assignee:user.fbid})
  //   .then(function(newLink){
  //     user.addLink(newLink);
  //   });
  // })

  // User.findOne({fbname: "Squirrely"})
  //   .then(function(user){
  //     // User.create({fbid: '27364asf', fbname: 'Squirrely'})
  //     //   .then(function(newUser){
  //     //     user.addFriend(newUser);
  //     //   })
      
  //     // Link.create({url:'www.espn.com', owner:user.fbid, assignee:user.fbid})
  //     //   .then(function(newLink){
  //     //     user.addLink(newLink);
  //     //   });

  //     // Link.findAll({where: {
  //     //   owner: user.fbid
  //     // }})
  //     // .then(function(data){
  //     //   var mapped = data.map(function(curr){
  //     //     return curr.dataValues;
  //     //   })
  //     //   console.log(mapped);
  //     // })
  //   });
})
.catch(function(err){
  console.log('sequelize connection error');
});


/* Uncommment portion below to resync database (drop tables)
as well as to add relational sequelize methods to it's model instances! */
// db.sync({force: true})
//   .then(function(){
//     console.log('sycn success!');
//     User.create({fbid: '928374', fbname: 'Michael Wong'})
//       .then(function(user){
//         console.log('user saved', user);
//       })
//   })
//   .catch(function(err){
//     console.log(err, 'could not sync');
//   }); // <=== force sync to refresh

//connect middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//connect routes
routes(app);

//set env variables 
var port = process.env.PORT || 8888;

app.listen(port, function(){
  console.log('app listening on port ' + port);
})