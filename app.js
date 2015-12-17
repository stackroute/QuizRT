var http = require('http');
var express = require('express');
var app = express();

// Set the view engine
app.set('view engine', 'ejs');
// Where to find the view files
app.set('views', './views');
app.use(express.static('./public'));
// A route for the home page - will render a view
app.get('/', function(req, res) {
  res.render('userprofile');
});

// A route for /say-hello - will render a view
app.get('/topics-main', function(req, res) {
  res.render('topics-main');
});

app.get('/category', function(req, res) {
  res.render('category');
});

app.get('/topic-play', function(req, res) {
  res.render('topic-play');
});

app.get('/quizPlayer', function(req, res) {
  res.render('quizPlayer');
});

  app.get('/quizSummary', function(req, res) {
    res.render('quizSummary');
});

app.get('/leaderboard', function(req, res) {
  res.render('leaderboard');
});

app.get('/temp', function(req, res, next) {
  console.log("passed");
  next();
});


http.createServer(app).listen(3000, function() {
  console.log('App started for EJS testing!!');
});
