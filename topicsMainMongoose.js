fs = require('fs');


fs.readFile('topics-main.json', 'utf8', function (err,data) {
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




 var topicsMain = mongoose.model('topicsMain', topicsMainSchema, "topics_main_collection");


 for(i=0;i<json.length;++i)
 {
 var category = new topicsMain(json[i]);
   category.save(function(err){
    if ( err ) console.log(err);
    console.log("Category Saved Successfully");
 });
 }
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
