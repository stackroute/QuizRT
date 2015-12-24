var mongoose = require('mongoose');
var fs = require('fs');
var profileData = JSON.parse(fs.readFileSync('public/data/lakshay.json'));
mongoose.connect('mongodb://localhost/quizRT');
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
  },
  {strict:false}
);

  var Profile = mongoose.model('Profile2', profileSchema, "profile_collection");
  var profile1 = new Profile({
    userId : profileData.userId,
    name : profileData.name,
    age : profileData.age,
    imageLink : profileData.imageLink,
    country : profileData.country,
    flagLink : profileData.flagLink,
    badge : profileData.badge,
    totalGames : profileData.totalGames,
    followers : profileData.followers,
    following : profileData.following,
    wins : profileData.wins,
    followedTopics : profileData.followedTopics,
    friends : profileData.friends
  });

  profile1.save(function(err){
    if ( err ) console.log(err);
    console.log(profileData.name +" profile Saved Successfully");
    console.log('closing mongo');
    mongoose.disconnect();
  });

});
