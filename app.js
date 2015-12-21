var http = require('http');
var express = require('express');
var app = express();
var quizPlayer = require('./routes/quizPlayerhandler.js');
var topicsHandler=require('./routes/topicsHandler.js');
var userProfile=require('./routes/profileHandler.js');
var quizSummaryHandler = require('./routes/quizSummaryHandler.js');

// var url = require('url');
// var querystring = require('querystring');
// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.get('/', function(req, res) {
  res.render('userprofile');
});


app.use('/userProfile',userProfile);
app.use('/quizPlayer',quizPlayer);
app.use('/topicsHandler',topicsHandler);

  app.use('/quizSummary',quizSummaryHandler);

app.get('/leaderboard', function(req, res) {
  res.render('leaderboard');
});



http.createServer(app).listen(3000, function() {
  console.log('App started for EJS testing!!');
});
