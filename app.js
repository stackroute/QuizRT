var http = require('http');
var express = require('express');
var app = express();
var quizPlayer = require('./routes/quizPlayerHandler.js');
// var url = require('url');
// var querystring = require('querystring');
// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.get('/', function(req, res) {
  res.render('userprofile');
});

app.get('/topics-main', function(req, res) {
  res.render('topics-main');
});

app.use('/quizPlayer',quizPlayer);

app.get('/category', function(req, res) {
  res.render('category');
});

app.get('/topic-play', function(req, res) {
  res.render('topic-play');
});

  app.get('/quizSummary', function(req, res) {
    res.render('quizSummary');
});

app.get('/leaderboard', function(req, res) {
  res.render('leaderboard');
});



http.createServer(app).listen(3000, function() {
  console.log('App started for EJS testing!!');
});
