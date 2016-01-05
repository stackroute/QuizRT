function loadPage(name){
  $('#startGameButton').attr('href',"/quizPlayer/"+name);
  setPage();
};
function setPage(){

  $.ajax({
    dataType: "json",
    url: '/topicsHandler/topicplaydata',
    method: 'POST',

    success: function(data){
      var a=$('.topic-user').height();
      var b=$('.topic-icon img').height(a);
      var a=$('.leaderboard label').height();
      var b=$('.leaderboard img').height(a);
      var a=window.outerHeight;
      var b=($('.topic-info').outerHeight());
      $('.play-button').height(0.9*(a-b));
      $('.play-button button').css('margin-top',0.1*(a-b));

      $('.play-button button').height((0.7)*(a-b));

      var c=data["Topic Name"];
      $('.topic-name h2').text(c);
      var c=data["Topic Description"];
      $('.topic-description h4').text(c);
      var src=data["Topic Icon"];
      var x=$('.topic-icon')
      .find('img');
      var c=data["Topic Wins"];
      $('#numwins h3').text(c);
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
};
