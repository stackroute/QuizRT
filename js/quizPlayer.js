var currentTime=10,
    questionCounter=0,
    totalScore=0,
    timer=$('#timer'),
    quizData,
    jsonOperation= $.getJSON('data/quiz.json',function(data){
                    quizData=data;
                  }).promise();

$('body').css('height',0.97*window.outerHeight);
$('.myRow').on('click', 'button',updateScore);
$('.myRow').on('click', 'button', changeOptionColor);

jsonOperation.done(function(){
    updateQuestion();
    console.log(new Date().valueOf());
    runTimer();

//  runTimer();

  // runTimer();
});
  // timerOperation.done(updateQuestion);
  // timerOperation.done(runTimer);
  // timerOperation.done(updateQuestion);
  // timerOperation.done(runTimer);
  //timerOperation.done(updateQuestion);
//  timerOperation.done(updateQuestion);

  // timerOperation=timerOperation.done(runTimer);
  // timerOperation.done(runTimer);


  // while(questionCounter<quizData.questions.length){
  //   // timerOperation=runTimer();
  //   // timerOperation.done(updateQuestion);
  //   runTimer().done(updateQuestion);
  //  }

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
        currentTime=10;
        if(questionCounter<quizData.questions.length)
        {
          console.log(new Date().valueOf());
          runTimer();
          updateQuestion();
        }
     }
  },1000);
}

// function runTimer(){
//   var deferred= new $.Deferred(),
//       timer= $('#timer');
//   timer.text(currentTime--);
//   var displayTime=setInterval(function(){
//     timer.text(currentTime);
//     currentTime--;
//     if(currentTime<0){
//       clearInterval(displayTime);
//       currentTime=10;
//       deferred.resolve();
//     }
//   },1000);
//    return deferred.promise();
//    //updateQuestion();
// };

function updateQuestion(){
  // console.log('called');
  // console.log(questionCounter);
      var optionCounter=1;
      // console.log(quizData.questions[questionCounter].question);
      $('#questionInfoPanel h4 strong').text(quizData.questions[questionCounter].question);

      $('#questionInfoPanel img').remove();

      if(quizData.questions[questionCounter].image=='null'){
        $('#questionInfoPanel h4').height('100%');
      }
      else{
        var createdImage=$('<img></img>').attr('src', quizData.questions[questionCounter].image);
        createdImage.appendTo($('#questionInfoPanel'));
        $('#questionInfoPanel h4').addClass('questionText');
        $('#questionInfoPanel img').addClass('questionImage');
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
        // createdOption=$('<button></button>').text(data.questions[questionCounter]["option"+optionCounter]).id("option"+optionCounter).addClass('btn btn-1 btn-large btn-block');
        createdOption.appendTo(createdDiv);
        createdDiv.appendTo($('.myRow'));

        optionCounter++;
      }
      // console.log(questionCounter);
      questionCounter++;
      setButtonHeight();
      // delay(10000);
  // console.log(questionCounter);
};

function updateScore(){
  var scoreBoard=$('#scoreBoard');

  console.log($(this));
  if($(this).hasClass('correct-answer')){
     currentScore=10+currentTime;
     totalScore+=currentScore;
     scoreBoard.css('color', 'green')
                .text(currentScore);

      scoreBoard.animate({
          opacity: 1,

      },500).animate({
        top: '4%',
        left:'93%',
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
   }

  else{
    currentScore=-5;
    totalScore+=currentScore;
    scoreBoard.css('color', 'red')
               .text(currentScore);

     scoreBoard.animate({
         opacity: 1,

     },500).animate({
       top: '4%',
       left:'93%',
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
  }

  console.log(totalScore);
};

function changeOptionColor(){
  if($(this).hasClass('correct-answer')) $(this).addClass('btn-success');
  else{
    $(this).addClass('btn-danger');
    $('.correct-answer').addClass('btn-success');
  }
  $('.myRow button').attr('disabled', 'disabled');
}

function setButtonHeight(){
  var totalOptions = $('.myOptions').length;
  if(totalOptions%2 == 1){
    totalOptions++;
    $('.myOptions:last-child').addClass('centeredButton');
  }
  totalOptions/=2;
  $('.myOptions').css('height',100/totalOptions+"%");

};
