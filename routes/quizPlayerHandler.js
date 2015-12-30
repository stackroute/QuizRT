var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var Quiz = require("../models/quiz");

//generate game id
//register game with a gloabal variable
//put the current id into EJS

var quiz;

var properties = JSON.parse(fs.readFileSync('public/data/quizProperties.json'));

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

var properties = JSON.parse(fs.readFileSync('public/data/quizProperties.json'));

router.post('/quizData', function(req, res, next) {
  Quiz.find(function(err,data){
      if(err) console.log(err);
      var rn = Math.floor((Math.random() * 3) + 0);
      quiz=data[2];
      res.setHeader('Content-Type', 'application/json');
      res.json(quiz);
  });
});

router.post('/quizProperties', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(properties);
});

router.post('/submitresult', function(req, res, next) {
  console.log("passed");
  console.log(req.body);
});

router.get('/:id', function(req, res, next) {
  var userId = req.params.id;
  res.render('quizPlayer',{userId: userId});
});

module.exports = router;
