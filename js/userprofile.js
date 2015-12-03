
$.getJSON("data/userdata.json",function(data){

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
  var wins=data[0].wins;
  var losses=totalGames-wins;
  var winpercentage=(wins/totalGames)*100;
  $('.container .user #UserName ').text(name);
  $('.container .user img').attr("src",imageLink);
  $('.container .user #age ').text(age);
  $('.container .user #badge ').text(badge);
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



}
