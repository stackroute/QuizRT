(function(){
  var timeLimit,
  currentTime,
  questionCounter=0,
  totalScore=0,
  timer=$('#timer'),
  quizData,
  // jsonOperation= $.getJSON('/quizData',function(data){
  //   quizData=data;
  // }).promise();
  jsonOperation=$.ajax({
  dataType: "json",
  url: '/quizPlayer/quizData',
  // data: data,
  method: 'POST',
  success: function(data){
    quizData=data;
  }
}).promise();


  // jsonOperation2=$.getJSON('/quizProperties', function(data){
  //   timeLimit=data.timeLimit;
  //   currentTime=data.timeLimit;
  // }).promise();

  jsonOperation2=$.ajax({
  dataType: "json",
  url: '/quizPlayer/quizProperties',
  // data: data,
  method: 'POST',
  success: function(data){
    timeLimit=data.timeLimit;
    currentTime=data.timeLimit;
  }
}).promise();

  if(window.outerWidth > 1200){
    $('body').css('height',620);
  }
  else{
    $('body').css('height',0.97*window.outerHeight);
  }

  $('.myRow').on('click', 'button',updateScore);
  $('.myRow').on('click', 'button', changeOptionColor);

  $.when(jsonOperation, jsonOperation2).done(function(){
    updateQuestion();
    runTimer();
  });



  //Function definitions
  function delay(time){
    var d1= new Date();
    var d2 = new Date();
    while(d2.valueOf() < d1.valueOf() + time){
      var d2 = new Date();
    }
  };



  function runTimer(){
    timer= $('#timer');
    timer.text(currentTime--);
    var a=setInterval(function(){
      timer.text(currentTime);
      currentTime--;
      if(currentTime<0)
      {
        clearInterval(a);
        currentTime=timeLimit;
        if(questionCounter<quizData.questions.length)
        {
          runTimer();
          updateQuestion();
        }
        else{
          sendScoreToServer();
          window.location.replace('/quizSummary');
        }
      }
    },1000);
  }



  function updateQuestion(){
    var optionCounter=1;
    $('#questionInfoPanel h4 strong').text(quizData.questions[questionCounter].question);

    $('#questionInfoPanel img').remove();

    if(quizData.questions[questionCounter].image=='null'){
      $('#questionInfoPanel h4').css('height','100%');
    }
    else{
      var createdImage=$('<img></img>').attr('src', quizData.questions[questionCounter].image);
      createdImage.appendTo($('#questionInfoPanel'));
      $('#questionInfoPanel h4').addClass('questionText').css('height','28%');
      $('#questionInfoPanel img').addClass('questionImage').css('height','72%');
    }

    $('.myOptions').remove();
    while(quizData.questions[questionCounter]["option"+optionCounter])
    {
      createdDiv= $('<div></div>',{
        class: 'col-sm-6 col-xs-6 myOptions'
      });

      createdOption=$('<button></button>',{
        text: quizData.questions[questionCounter]["option"+optionCounter],
        id:"option"+optionCounter,
        class:"btn btn-1 btn-large btn-default btn-block",
        type: "button"
      });
      if(optionCounter==quizData.questions[questionCounter].correctIndex) createdOption.addClass('correct-answer');
      else createdOption.addClass('wrong-answer');
      createdOption.appendTo(createdDiv);
      createdDiv.appendTo($('.myRow'));
      optionCounter++;
    }
    questionCounter++;
    setButtonHeight();
  };




  function updateScore(){
    var scoreBoard=$('#scoreBoard');
    var totalScoreBoard = $('#myScore').offset();
    var left_ = totalScoreBoard.left;
    var top_ = totalScoreBoard.top+10;
    var optionColor;


    if($(this).hasClass('correct-answer')){
      questionScore=10+currentTime;
      totalScore+=questionScore;
      optionColor = "green";
    }

    else{
      questionScore=-5;
      totalScore+=questionScore;
      optionColor = "red";
    }
    animate(optionColor,totalScore,top_,left_,scoreBoard);
  };


  function animate(optionColor,totalScore,top_,left_,scoreBoard){
    scoreBoard.css('color', optionColor)
    .text(questionScore);
    scoreBoard.animate({
      opacity: 1,
    },500).animate({
      top: top_,
      left:left_,
      'font-size': '10px'
    }, 700).animate({
      opacity: 0
    },100, function(){
      $('#myScore').text(totalScore);
    }).animate({
      top: '50%',
      left: '45%',
      'font-size': '50px'
    }, 1);
  };


  function changeOptionColor(){
    if($(this).hasClass('correct-answer')) $(this).addClass('btn-success');
    else{
      $(this).addClass('btn-danger');
      $('.correct-answer').addClass('btn-success');
    }
    $('.myRow button').attr('disabled', 'disabled');
  };


  function setButtonHeight(){
    var totalOptions = $('.myOptions').length;
    if(totalOptions%2 == 1){
      totalOptions++;
      $('.myOptions:last-child').addClass('centeredButton');
    }
    totalOptions/=2;
    $('.myOptions').css('height',100/totalOptions+"%");
  };


  function sendScoreToServer(){
    var scoreTemp = $('#myScore').text();
    var scr = JSON.stringify({
                "score":scoreTemp,
                "name":"akshay"
              });
    $.ajax({
      url: '/quizPlayer/submitresult',
      type: 'POST',
      data: scr,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      processdata: true,
      crossDomain: true,
      async: true,
      success: function(msg) {
        console.log('data sent succesfully');
      }
    });
  };

})();
