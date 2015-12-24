var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connection open');
  var quizSchema = mongoose.Schema({
  quizId: {type:String, unique:true},
  multiplier: Number,
  questions : []
  
},{strict:false});
var Quiz = mongoose.model('Quiz', quizSchema, "quiz_questions_demo_collection");
var quiz1 = new Quiz({
  quizId: "3",
  multiplier: 3,
  questions : [{
                questionId:"1",
                question:"Who of the following will head the Judicial Committee on One Rank One Pension (OROP) scheme?",
                option1:"Y V Reddy",
                option2:"L Narasimha Reddy",
                option3:"Sanjay Mishra",
                option4:"Wykrhm Reddy",
                correctIndex:1,
                image: "null"
              },
              {
                questionId:"2",
                question:"identify the personality",
                option1:"SRK",
                option2:"Amir",
                option3:"Salman",
                option4:"Akshay K",
                option5: "None of the above",
                correctIndex:4,
                image: "images/questionImages/akshayk.jpg"
              },
              {
                questionId:"3",
                question:"what are you doing now?",
                option1:"Reading",
                option2:"Learning",
                option3:"Listening",
                option4: "Dancing",
                option5: "Wasting Time",
                option6: "Eating",
                correctIndex:5,
                image: "null"
              }
              ]
});
quiz1.save(function(err){
if ( err ) console.log(err);
console.log("Quiz1 Saved Successfully");
console.log('closing mongo');
mongoose.disconnect();
});

});
