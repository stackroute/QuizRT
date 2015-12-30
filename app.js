var http = require('http');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var server = http.createServer(app);
var io = require('socket.io')(server);


var quizPlayer = require('./routes/quizPlayerhandler.js');
var topicsHandler = require('./routes/topicsHandler.js');
var userProfile = require('./routes/profileHandler.js');
var quizSummaryHandler = require('./routes/quizSummaryHandler.js');


mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser());
app.use(session({
  secret: "ksjdfjkdsjkdsajfdskjfskdjf",
  cookie: { maxAge: 3000 }
}));

app.use(express.static('./public'));
app.use('/userProfile',userProfile);
app.use('/quizPlayer',quizPlayer);
app.use('/topicsHandler',topicsHandler);
app.use('/quizSummary',quizSummaryHandler);

app.get('/testingSessions', function(req, res, next) {
  if(req.session.count >= 0){
    req.session.count++;
    res.send("testing sessions"+" "+req.session.count);
  }
  else{
    req.session.count = 0;
    res.send("testing sessions"+" "+req.session.count);
  }

});

server.listen(3000, function() {
  console.log('App started for EJS testing!!');
});

io.on('connection', function(client) {
    client.on('join', function(data) {
        console.log(data);
        console.log("players connected = "+ io.sockets.sockets.length);
        client.emit('messages', 'Hello from server');
    });
    client.on('disjoin',function(data){
      console.log(data+" player disconnected");
    });

    if(io.sockets.sockets.length <1){
        io.sockets.emit('not_enough',"players not enough. waiting for "+(1 - io.sockets.sockets.length)+" more players");
    }
    else{
      io.sockets.emit("startGame","start the game");
    }
});
