var loadUserProfile = function(name) {
  $.ajax({
    dataType: "json",
    url: '/userProfile/profileData/' + name,
    method: 'POST',
    success: function(data){
      userdata(data);
    }
  })
};

function userdata(data){
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
  console.log(topics);
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
  $('.container  .Followinfo .Followers span:nth-child(2)').text(followers);
  $('.container  .Followinfo .Following span:nth-child(2)').text(following);
  $('.container  #GamesInfo #win p').html("Wins"+"<br>"+wins);
  $('.container  #GamesInfo #loss p').html("Losses"+"<br>"+losses);
  $('.container  #GamesInfo #winpercentage p').html("Win%"+"<br>"+winpercentage);
  var cols = $('.topicholder');
  var tlen = topics.length;
  topics.sort(function(a,b){return b.level-a.level});

  for(i=0;i<topics.length;i++)
  {
    if(i>=11){
      break;
    }
    cols.eq(i).find('img').attr("src",topics[i].topicImage);
    console.log(topics[i].topicImage);
    cols.eq(i).find('.topic').text(topics[i].topicName);
    console.log(topics[i].topicName);
    cols.eq(i).find('.badge').text(topics[i].level);
    console.log(topics[i].level);
    cols.eq(i).find('.wins').text(' ' + topics[i].gamesWon +'/' + topics[i].gamesPlayed);
  }

  for(var i=topics.length;i<11;i++){
    cols.eq(i).find('img').attr("src","/images/userProfileImages/add.jpg");
  }

  if(topics.length<=12){
    cols.eq(11).find('img').attr("src","/images/userProfileImages/add.jpg");
  }

  if(topics.length>12){
    cols.eq(11).find('img').attr("src","/images/userProfileImages/seeall.jpg");
  }

  if(topics.length>12)
  {
    var p=(topics.length-12)/6;
    var q=topics.length%6;
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

  }
}
