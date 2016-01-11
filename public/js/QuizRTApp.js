var app = angular.module('quizRTApp',['ngRoute','ngResource']);

app.config(function($routeProvider){

  $routeProvider
		//the timeline display
		.when('/topicsmain', {
			templateUrl: 'topicsmain.html',
			controller: 'topicsmainController'
		});
     .when('/userprofile',
   {
     templateUrl:'userprofile.html',
     controller:'profileController'
   });
});


app.factory('categoryService', function($resource){
	return $resource('/api/topicsmain/:id');
});

app.controller('topicmainController',function($scope){

  $scope.categories=categoryService.query();

});
