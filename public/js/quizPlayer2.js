var quizData
var quizProperties;
var questionCounter=0;
var optionCounter = 1;
angular.module('quizPlayerApp',[])
        .controller('questionController',function($scope){
          $scope.$on('changeQuestion',function(event,data){
            $scope.isDisabled = false;
            $scope.question = quizData.questions[data].question;
            var tempOptions=[];

            while(quizData.questions[data]['option'+optionCounter]){
              var temp = {"name":quizData.questions[data]['option'+optionCounter],"id":"option"+optionCounter};
              tempOptions.push(temp);
              optionCounter++;
            }
            $scope.options = tempOptions;
            optionCounter=1;
            $scope.changeColor = function(id,element){
              if(id == "option"+quizData.questions[data].correctIndex){
                $(element.target).addClass('btn-success');
                $scope.$emit('emitCurrentScore','correctAnswer');
              }
              else{
                $(element.target).addClass('btn-danger');
                angular.element('#option'+quizData.questions[data].correctIndex).addClass('btn-success');
                $scope.$emit('emitCurrentScore','wrongAnswer');
              }
              $scope.isDisabled = true;
            };
          });

            setButtonHeight();
        })
        .controller('rootController',function($scope, $interval,$http){
          $scope.$on('emitCurrentScore',function(event,data){
            if(data == 'correctAnswer')
            $scope.$broadcast('emittingCurrentScore',10 + $scope.time);
            else {
              $scope.$broadcast('emittingCurrentScore',-5);
            }
          });
          $http.post('/quizPlayer/quizData').success(function(data){
            quizData  = data;
            $scope.time=5;

            var timeInterval= $interval(function(){
              $scope.time--;
              if($scope.time==0){
                $scope.$broadcast('changeQuestion',questionCounter);
                $scope.time=5;
                questionCounter++;
                if(questionCounter==quizData.questions.length){
                  $interval.cancel(timeInterval);
                }
              }
            },1000);
          });
        })
        .controller('statusController',function($scope){

        })
        .controller('rankController',function($scope){
          $scope.topperScore = 55;
          $scope.myScore = 50;
          $scope.$on('emittingCurrentScore',function(event,data){
            $scope.myScore = $scope.myScore + data;
          });
        });


function setButtonHeight(){
  var totalOptions = $('.myOptions').length;
  if(totalOptions%2 == 1){
    totalOptions++;
    $('.myOptions:last-child').addClass('centeredButton');
  }
  totalOptions/=2;
  $('.myOptions').css('height',100/totalOptions+"%");
};
