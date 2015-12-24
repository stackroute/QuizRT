var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Profile;
mongoose.connect('mongodb://localhost/quizRT');
// var profileData = JSON.parse(fs.readFileSync('public/data/lakshay.json'));
var profileData;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

  console.log('connection open');
  var profileSchema = mongoose.Schema({
    userId: {type:String, unique:true},
    name:String,
    age:Number,
    imageLink:String,
    country:String,
    flagLink:String,
    badge:String,
    totalGames:Number,
    followers:Number,
    following:Number,
    wins:Number,
    followedTopics:Object,
    friends:[]
  },{strict:false}
  );
  Profile = mongoose.model('Profile2', profileSchema, "profile_collection");

});

router.post('/profileData/:id', function(req, res, next) {
  console.log("this is form profile data"+req.params.id);
    Profile.findOne({userId: req.params.id})
          .exec(function(err,data){
            profileData = data;
            res.json(profileData);
          });
});

/* GET home page. */
router.get('/:id',function(req, res, next) {
  var userId = req.params.id;
  console.log("This is from userprofie"+userId);
  Profile.findOne({userId: req.params.id})
        .exec(function(err,data){
          if(!data){
          profileData = data;
          res.render("fileNotFound");
        }
        res.render('userprofile', {userId: userId});
        });

});

module.exports = router;
