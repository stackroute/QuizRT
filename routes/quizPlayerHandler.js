var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
<<<<<<< HEAD
var Quiz;
var quiz;
var db;
// = JSON.parse(fs.readFileSync('public/data/quiz.json'));
var properties = JSON.parse(fs.readFileSync('public/data/quizProperties.json'));

router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizRT');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  var quizSchema = mongoose.Schema({
  quizId: {type:String, unique:true},
  multiplier: Number,
  questions : []
});
  Quiz = mongoose.model('Quiz', quizSchema,'quiz_questions_demo_collection');
});

=======
//Change the names of json contents
var contents = JSON.parse(fs.readFileSync('public/data/quiz.json'));
var contents1 = JSON.parse(fs.readFileSync('public/data/quizProperties.json'));
>>>>>>> 7cb2e591baf2b06293a4671e593939b00ee6f560

router.post('/quizData', function(req, res, next) {
  Quiz.find(function(err,data){
      if(err) console.log(err);
      var rn = Math.floor((Math.random() * 3) + 0);
      quiz=data[rn];
      // console.log(data);
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

router.get('/', function(req, res, next) {
  res.render('quizPlayer')
});

router.get('/quizSummary', function(req, res, next) {
  res.render('quizSummary')
});
module.exports = router;
