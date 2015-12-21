var express = require('express');
var router = express.Router();
var fs = require('fs');
//Change the names of json contents
var contents = JSON.parse(fs.readFileSync('public/data/quiz.json'));
var contents1 = JSON.parse(fs.readFileSync('public/data/quizProperties.json'));

/* GET home page. */
router.post('/quizData', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(contents);
});

router.post('/quizProperties', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(contents1);
});

router.get('/submitresult', function(req, res, next) {
  console.log("passed");
  console.log(req.query);
});

router.get('/', function(req, res, next) {
  res.render('quizPlayer')
});

router.get('/quizSummary', function(req, res, next) {
  res.render('quizSummary')
});
module.exports = router;
