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
  },
  {strict:false}
);
var Quiz = mongoose.model('Quiz', quizSchema, "quiz_questions_demo_collection");
var quiz1 = new Quiz({
  quizId: "akssan",
  multiplier: 3,
  questions : ["567bd2e9728cf120076a0194","567bd2e9728cf120076a0193","567bd2e9728cf120076a0192","567bd2e9728cf120076a0191"]
});

quiz1.save(function(err){
  if ( err ) console.log(err);
  console.log("Quiz1 Saved Successfully");
  console.log('closing mongo');
  mongoose.disconnect();
});

});
