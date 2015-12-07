
$.getJSON("data/ayush.json",function(data){

  console.log(typeof data);
  console.log(data);
  userdata(data);
});


function userdata(data)
{
  var name=data[0].name;
  var age=data[0].age;
  var imageLink=data[0].imageLink;
  var flagLink=data[0].flagLink;
  var badge=data[0].badge;
  var totalGames=data[0].totalGames;
  var followers=data[0].followers;
  var following=data[0].following;
  var age=data[0].age;
  var country=data[0].country;
  var wins=data[0].wins;
  var topics = data[0].followedTopics;
  var losses=totalGames-wins;
  var winpercentage=Math.round((wins/totalGames)*100);
  $('.container .user #UserName ').text(name);
  $('.container .user img').attr("src",imageLink);
  $('.container .user #badge ').text(badge);
  $('.container .user #age ').text(age);
  $('.container .user #country ').text(country);
  $('.container .user #flag img').attr("src",flagLink);
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
  topics.sort(function(a,b){
    return b.level - a.level;
  })
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


}
