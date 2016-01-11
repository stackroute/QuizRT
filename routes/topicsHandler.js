var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');

var Category = require("../models/topicsmain");

var topicplaydata = JSON.parse(fs.readFileSync('public/data/topic-play.json'));
var categorydata = JSON.parse(fs.readFileSync('public/data/category.json'));
var leaderboarddata = JSON.parse(fs.readFileSync('public/data/leaderboard.json'));

/*router.post('/topicsmaindata', function(req, res, next) {
  topicsMain.find(function(err,data){
    console.log(data);
      if(err) console.log(err);
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
  });
});*/

router.get('/topicsmain',function(req,res,data){

  Category.find(function(err, categories){
			if(err){
				return res.send(500, err);
			}
			return res.send(categories);
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
router.get('/topic-play/:id',function(req, res, next) {
  var userId = req.params.id;
  res.render('topic-play',{userId: userId});
});

router.get('/category',function(req, res, next) {
  res.render('category');
});

router.get('/leaderboard',function(req, res, next) {
  res.render('leaderboard');
});

router.get('/:id',function(req, res, next) {
  var userId = req.params.id;
  res.render('topics-main',{userId: userId});
});


module.exports = router;
