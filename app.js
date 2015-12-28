var http = require('http');
var express = require('express');
var app = express();
var quizPlayer = require('./routes/quizPlayerhandler.js');
var topicsHandler = require('./routes/topicsHandler.js');
var userProfile = require('./routes/profileHandler.js');
var quizSummaryHandler = require('./routes/quizSummaryHandler.js');

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use('/userProfile',userProfile);
app.use('/quizPlayer',quizPlayer);
app.use('/topicsHandler',topicsHandler);
app.use('/quizSummary',quizSummaryHandler);


http.createServer(app).listen(3000, function() {
  console.log('App started for EJS testing!!');
});
