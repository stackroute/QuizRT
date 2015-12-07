(function(){
  if(window.outerWidth > 1200){
      $('body').css('height',620);
  }
  else{
    $('body').css('height',0.85*window.outerHeight);
  }

  var level,
      lvlUpScore,
      lvlUpUpScore,
      currentLvlScore,
      previousScore,
      gainedExp,
      currentPercentage,
      gainedPercentage;

  jsonOperation=$.getJSON('data/quizSummary.json', function(data){
    level=data.level;
    lvlUpScore=data.lvlUpScore;
    lvlUpUpScore=data.lvlUpUpScore;
    currentLvlScore=data.currentLvlScore;
    previousScore=data.previousScore;
    gainedExp=data.gainedExp;
    currentPercentage=(previousScore-currentLvlScore)*100/(lvlUpScore-currentLvlScore)+"%";
    gainedPercentage= gainedExp*100/(lvlUpScore-currentLvlScore)+"%";
    console.log(gainedExp);
  }).promise();

  jsonOperation.done(function(){
      if(previousScore+gainedExp<lvlUpScore){
        $('#myProgressBar').width(currentPercentage).text(currentPercentage);
        $('#myProgressBar2').text(gainedPercentage).animate({
          "width": gainedPercentage
        },500);
      }
      else{
        $('#myProgressBar').width(currentPercentage).text(currentPercentage);
        setTimeout(function(){
          $('#myProgressBar2').width(100-parseInt(currentPercentage)+'%').text(100-parseInt(currentPercentage)+'%');
        },500);
        setTimeout(function(){
          $('#level-indicator-div h4 strong').text('Lv '+parseInt(level+1));
          $('#myProgressBar').remove();
          $('#myProgressBar2').remove();
          $('<div class="progress-bar progress-bar-success progress-bar-striped" id="myProgressBar" role="progressbar"></div>').appendTo('.progress');
          $('<div class="progress-bar progress-bar-warning progress-bar-striped" id="myProgressBar2" role="progressbar"></div>').appendTo('.progress');
          $('#myProgressBar').width("0%");
          $('#myProgressBar2').width((previousScore+gainedExp-lvlUpScore)*100/(lvlUpUpScore-lvlUpScore)+'%').text((previousScore+gainedExp-lvlUpScore)*100/(lvlUpUpScore-lvlUpScore)+'%');
        },1200);

      }
  });
})();
