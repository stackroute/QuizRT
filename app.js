var http = require('http');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var server = http.createServer(app);
var io = require('socket.io')(server);
var allGames = [];
var maxPlayers = 3;
var arrayOfPlayers =[];

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

    // if(io.sockets.sockets.length <maxPlayers){
    //     io.sockets.emit('not_enough',"players not enough. waiting for "+(maxPlayers - io.sockets.sockets.length)+" more players");
    // }
    // else{
    //   io.sockets.emit("startGame","start the game");
    // }

    //create a group of 4 clients

    arrayOfPlayers.push(client);

    if(arrayOfPlayers.length < maxPlayers){
      for (var i = 0; i < arrayOfPlayers.length; i++) {
        arrayOfPlayers[i].emit('not_enough',"players not enough. waiting for "+(maxPlayers - arrayOfPlayers.length)+" more players");
      }
    }

    if(arrayOfPlayers.length == maxPlayers){
      var game1 = new game(makeid(),arrayOfPlayers,false);
      allGames.push(game1);
      arrayOfPlayers = [];
    }

    //for loop runs before the execution of if condition above....verify


    for (var i = 0; i < allGames.length; i++) {
      if(!allGames[i].isRunning)
      {
        console.log(allGames.length+" total games running in the server");
        renderThegame(allGames[i]);
        allGames[i].isRunning = true;
      }
    }

});

function renderThegame(game){
  console.log("Multiple games render. total players = "+game.arrayOfPlayers.length);
  if(game.arrayOfPlayers.length < maxPlayers){
    //emit from the corresponding sockets
    console.log("tsting kjhsadkjfhk kj sah "+game.arrayOfPlayers.length);
    for (var i = 0; i < game.arrayOfPlayers.length; i++) {
      game.arrayOfPlayers[i].emit('not_enough',"players not enough. waiting for "+(maxPlayers - game.arrayOfPlayers.length)+" more players");
    }
  }
  else{
    //emit from the aleternative from the corresponding sockets
    for (var i = 0; i < game.arrayOfPlayers.length; i++) {
      game.arrayOfPlayers[i].emit("startGame","start the game");
    }
  }
};

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};
function game(gameId,arrayOfPlayers,isRunning){
  this.isRunning;
  this.gameId = gameId;
  this.arrayOfPlayers = arrayOfPlayers;
};
