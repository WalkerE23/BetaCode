//appRoutes.js


angular.module('appRoutes', []).
	
	config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			.when('/createJob', {
				templateUrl: 'views/createJob.html',
				controller: 'CreateJobController'
			})

			.when('/manageJobs', {
				templateUrl: 'views/manageJobs.html',
				controller: 'ManageJobsController'
			})


			
			
		$locationProvider.html5Mode(true);
	}]);

