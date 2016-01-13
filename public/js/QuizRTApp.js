var app = angular.module('quizRTApp',['ngRoute','ngResource']);

app.config(function($routeProvider){

  $routeProvider
		//the timeline display
<<<<<<< HEAD
		// .when('/topicsmain', {
		// 	templateUrl: 'topicsmain.html',
		// 	controller: 'topicsmainController'
		// })

    .when('/quizPlayer',{
      'templateUrl':'quizPlayer.html'
    });

=======
		.when('/topicsmain', {
			templateUrl: 'topicsmain.html',
			controller: 'topicsmainController'
		});
     .when('/userprofile',
   {
     templateUrl:'userprofile.html',
     controller:'profileController'
   });
>>>>>>> 9dd66d87b32ae1a1d1cf6930dee80dcd12801e6e
});

app.factory('categoryService', function($resource){
	return $resource('/api/topicsmain/:id');
});
