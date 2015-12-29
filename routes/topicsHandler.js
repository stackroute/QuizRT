var express = require('express');
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizRT');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

    var topicsMainSchema = mongoose.Schema({
      categoryId: {type:String, unique:true},
      categoryName:String,
      categoryFilterCriteria : String,
      categoryLogo: String,
      categoryTopics: Array
    });

    var topicsMain = mongoose.model('topicsMain', topicsMainSchema, "topics_main_collection");

});


//var topicsmaindata = JSON.parse(fs.readFileSync('public/data/topics-main.json'));

var topicplaydata = JSON.parse(fs.readFileSync('public/data/topic-play.json'));
var categorydata = JSON.parse(fs.readFileSync('public/data/category.json'));
var leaderboarddata = JSON.parse(fs.readFileSync('public/data/leaderboard.json'));

router.post('/topicsmaindata', function(req, res, next) {

  topicsMain.find(function(err,data){
    console.log(data);
      if(err) console.log(err);
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
  });
  });



router.post('/topicplaydata', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(topicplaydata);
});

router.post('/categorydata', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(categorydata);
});

router.post('/leaderboarddata', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(leaderboarddata);
});

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('topics-main');
});

router.get('/topic-play',function(req, res, next) {
  res.render('topic-play');
});

router.get('/category',function(req, res, next) {
  res.render('category');
});

router.get('/leaderboard',function(req, res, next) {
  res.render('leaderboard');
});

module.exports = router;
