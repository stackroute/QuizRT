(function(){
$.ajax({
dataType: "json",
url: '/topicsHandler/topicplaydata',
// data: data,
method: 'POST',
success: function(data){
  var a=$('.topic-user').height();
  console.log(a);
  var b=$('.topic-icon img').height(a);
  var a=$('.leaderboard label').height();
  console.log(a);
  var b=$('.leaderboard img').height(a);
  var a=window.outerHeight;
  console.log("height="+a);
  var b=($('.topic-info').outerHeight());
  console.log(b);
  console.log(a-b);
  $('.play-button').height(0.9*(a-b));
  $('.play-button button').css('margin-top',0.1*(a-b));

  $('.play-button button').height((0.7)*(a-b));

  var c=data["Topic Name"];
  $('.topic-name h2').text(c);
  var c=data["Topic Description"];
  $('.topic-description h4').text(c);
  var src=data["Topic Icon"];
  var x=$('.topic-icon img');
  x.attr("src",src);
  var c=data["Topic Wins"];
  $('#numwins h3').text(c);
  console.log(c);
  console.log(x);
  var c=data["Topic Losses"];
  $('#numloss h3').text(c);
  var c=data["Topic Level"];
  $('.progress #levelnum').text(c);
  var c=data["Level Percentage"];
  $('.progress #levelperc').text(c);
  $('#level-bar').css('width',c+'%');
  var c=data["Followers"];
  $('.follow span').text(c);

}
});
})();
