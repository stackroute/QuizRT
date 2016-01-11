fs = require('fs');


fs.readFile('questions2.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var json=JSON.parse(data);

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/quizRT');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
   console.log('connection open');
   var quesBankSchema = mongoose.Schema({
     questionId: {type:String, unique:true},
     image: String,
     question: String,
     correctIndex: Number,
     option1: String,
     option2: String,
     option3: String,
     option4: String,
     topicId: String

 },{strict:false});



 var quesBank = mongoose.model('quesBank', quesBankSchema, "question_bank_collection");


 for(i=0;i<json.length;++i)
 {
 var ques = new quesBank(json[i]);
 ques.save(function(err){
    if ( err ) console.log(err);
    console.log("Ques "+i+" Saved Successfully");
 });
 }
 
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
