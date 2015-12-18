var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log('connection open');

  var bookSchema = mongoose.Schema({
  name: {type:String, unique:true},
  isbn: String,
  author: String,
  pages: Number
});

  var Book = mongoose.model('Book', bookSchema, "mongoose_demo");

  var book1 = new Book({
  name:"Mongoose Demo 1",
  isbn: "MNG123",
  author: "Author1,  Author2",
  pages: 123
  });

  book1.save(function(err){
  if ( err ) console.log(err);
  console.log("Book Saved Successfully");
  console.log('closing mongo');
  mongoose.disconnect();
  });

  // var book2 = new Book({
  //   name:"Mongoose Demo 2",
  //   isbn: "MNG124",
  //   author: "Author2,  Author3",
  //   pages: 90
  // });
  //
  // book2.save(function(err){
  //   if ( err ) throw err;
  //   console.log("Book Saved Successfully");
  // });
  //
  // Book.find(function(err,data){
  //     if(err) console.log(err);
  //     console.log(data);
  // });

});
