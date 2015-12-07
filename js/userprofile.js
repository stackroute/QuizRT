
$.getJSON("data/ayush.json",function(data){

  console.log(typeof data);
  //console.log(data);
  userdata(data);
});


function userdata(data)
{
  var name=data.name;
  var age=data.age;
  var imageLink=data.imageLink;
  var flagLink=data.flagLink;
  var badge=data.badge;
  var totalGames=data.totalGames;
  var followers=data.followers;
  var following=data.following;
  var wins=data.wins;
  var topics = data.followedTopics;
  console.log(typeof topics);
  var losses=totalGames-wins;
  var country=data.country;
  var winpercentage=Math.round((wins/totalGames)*100);
  $('.container .user #UserName ').text(name);
  $('.container .user #age ').text(age);
  $('.container .user img').attr("src",imageLink);
  $('.container .user #badge ').text(badge);
  $('.container .user #age ').text(age);
  $('.container .user #country ').text(country);
  $('.container .user #flag img').attr("src",flagLink);
  $('.container .user  #country').text(country);
  $('.container  .Followinfo .game span:nth-child(2)').text(totalGames);
  //console.log($('.container  .Followinfo .game span:nth-child(2)'));
  $('.container  .Followinfo .Followers span:nth-child(2)').text(followers);
  $('.container  .Followinfo .Following span:nth-child(2)').text(following);
  $('.container  #GamesInfo #win p').html("Wins"+"<br>"+wins);
  $('.container  #GamesInfo #loss p').html("Losses"+"<br>"+losses);
  $('.container  #GamesInfo #winpercentage p').html("Win%"+"<br>"+winpercentage);
  /*console.log(name);
  console.log(imageLink);
  console.log(totalGames);
  console.log(wins);
  console.log(losses);
  console.log(winpercentage);*/
  //console.log(topics);
/*  topics.sort(function(a,b){
    return b.level - a.level;
  });
  */
  /*var cols1 = $('.topicsinfo1 .col-xs-2');
  var cols2 = $('.topicsinfo2 .col-xs-2');*/
  var cols = $('.topicholder');
  var tlen = topics.length;

  /*   Previous complicated logic

  if(tlen<=6){

    for(var i=0;i<tlen;i++){
      cols1.eq(i).find('img').attr("src",topics[i].topicImage);
      cols1.eq(i).find('.topic').text(topics[i].topicName);
      cols1.eq(i).find('.badge').text(topics[i].level);
      cols1.eq(i).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
    }
    for(var i=tlen;i<6;i++){
      cols1.eq(i).find('img').attr("src",'images/userProfileImages/add.jpg');

    }
    for(var i=0;i<6;i++){
      cols2.eq(i).find('img').attr("src",'images/userProfileImages/add.jpg');
    }

  }
  else if(tlen<=12){
    for(var i=0;i<6;i++){
      cols1.eq(i).find('img').attr("src",topics[i].topicImage);
      cols1.eq(i).find('.topic').text(topics[i].topicName);
      cols1.eq(i).find('.badge').text(topics[i].level);
      cols1.eq(i).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
    }
    for(var i=6;i<tlen;i++){
      cols2.eq(i-6).find('img').attr("src",topics[i].topicImage);
      cols2.eq(i-6).find('.topic').text(topics[i].topicName);
      cols2.eq(i-6).find('.badge').text(topics[i].level);
      cols2.eq(i-6).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
    }
    for(var i=tlen;i<12;i++){
      cols2.eq(i-6).find('img').attr("src","images/userProfileImages/add.jpg");
    }
}
else{

  for(var i=0;i<6;i++){
    cols1.eq(i).find('img').attr("src",topics[i].topicImage);
    cols1.eq(i).find('.topic').text(topics[i].topicName);
    cols1.eq(i).find('.badge').text(topics[i].level);
    cols1.eq(i).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
  }
  for(var i=6;i<11;i++){
    cols2.eq(i-6).find('img').attr("src",topics[i].topicImage);
    cols2.eq(i-6).find('.topic').text(topics[i].topicName);
    cols2.eq(i-6).find('.badge').text(topics[i].level);
    cols2.eq(i-6).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
  }
 cols2.eq(5).find('img').attr("src","images/userProfileImages/seeall.jpg");
}*/
//var list = {"you": 100, "me": 75, "foo": 116, "bar": 15}
keysSorted = Object.keys(topics).sort(function(a,b){return topics[b].level-topics[a].level});
//console.log(keysSorted);
//alert(keysSorted);

for(i=0;i<keysSorted.length;i++)
{
  if(i>=11){
    break;
  }
  cols.eq(i).find('img').attr("src",topics[keysSorted[i]].topicImage);
  console.log(topics[keysSorted[i]].topicImage);
  cols.eq(i).find('.topic').text(topics[keysSorted[i]].topicName);
  console.log(topics[keysSorted[i]].topicName);
  cols.eq(i).find('.badge').text(topics[keysSorted[i]].level);
  console.log(topics[keysSorted[i]].level);
  cols.eq(i).find('.wins').text(' ' + topics[keysSorted[i]].gamesWon +'/' + topics[keysSorted[i]].gamesPlayed);
}
for(var i=keysSorted.length;i<11;i++){
  cols.eq(i).find('img').attr("src","images/userProfileImages/add.jpg");
}
if(keysSorted.length<=12){
  cols.eq(11).find('img').attr("src","images/userProfileImages/add.jpg");
}
if(keysSorted.length>12){
  cols.eq(11).find('img').attr("src","images/userProfileImages/seeall.jpg");

}
/*

  for(var i=0;i<tlen;i++){
    if(i>=11){
      break;
    }
    cols.eq(i).find('img').attr("src",topics[i].topicImage);
    cols.eq(i).find('.topic').text(topics[i].topicName);
    cols.eq(i).find('.badge').text(topics[i].level);
    cols.eq(i).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
  }
  for(var i=tlen;i<11;i++){
    cols.eq(i).find('img').attr("src","images/userProfileImages/add.jpg");
  }
  if(tlen<12){
    cols.eq(11).find('img').attr("src","images/userProfileImages/add.jpg");
  }
  else{
    cols.eq(11).find('img').attr("src","images/userProfileImages/seeall.jpg");

  }
*/

if(keysSorted.length>12)
{
  var p=(keysSorted.length-12)/6;
  var q=keysSorted.length%6;
  if(q>0)
  {
  for( var j=0;j<=p;j++)
  {
    $(".newrows").append('<div class="row topicsinfo"></div>');
  }
  }
  if(q==0)
  {
    for( var j=0;j<p;j++)
    {
      $(".newrows").append('<div class="row topicsinfo"></div>');
    }
  }
  for(var j=0;j<p;j++)
  {
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');
  $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

  $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

  $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
  $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
  $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');

}
if(q>0)
{
  for(var i=0;i<q;i++)
  {
    $(".topicsinfo").append('<div class="col-xs-2 topicholder"></div>');

    $(".topicholder").eq(i).append('<div> <a href="#"><img  class="img-rounded img-responsive" height="150px"></a></div><!--end topic-icon-->')

    $(".topicholder").eq(i).append('<div class="row"><div class="col-xs-12 col-sm-8"><span class="topic"></span></div>');
    $(".topicholder").eq(i).append('<div class="col-xs-12 col-sm-4"><span class="wins"></span></div>');
    $(".topicholder").eq(i).append('</div><span class="badge"></span></div>');

  }
}

/*
    var temp=data[i]["Topic Name"];

    var x=$('.topic-name').eq(i);
    x.text(temp);

    temp=data[i]["Topic Description"];
    var x=$('.topic-desc').eq(i);
    x.text(temp);

    temp=data[i]["Topic Category"];
    var x=$('small').eq(i);
    x.text(temp);

    var src=data[i]["Topic Icon"];
    var x=$('img').eq(i);
    x.attr("src",src);
    */

}
