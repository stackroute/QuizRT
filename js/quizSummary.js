(function(){
  if(window.outerWidth > 1200){
      $('body').css('height',620);
  }
  else{
    $('body').css('height',0.97*window.outerHeight);
  }

  var exp,
    level,
    thisMatchScore = 50,
    lvlUpScore,
    topicName="Indian History",
    topics;


var jsonOperation1 = $.getJSON("data/raghav.json", function(data){
  exp = 250;
  level=2;
}).promise();

var jsonOperation2 = $.getJSON('data/quizProperties.json', function(data){
  lvlUpScore=data.levels[level].minimumScore;
  console.log(lvlUpScore);
}).promise();

$.when(jsonOperation1,jsonOperation2).done(function(){
  $('#myProgressBar')
    .animate({
      width(exp*100/lvlUpScore+"%").text((exp)*100/lvlUpScore+"%");
    },1000);

});
})();
