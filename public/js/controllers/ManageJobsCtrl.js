// ManageJobsCtrl.js

angular.module('ManageJobsCtrl', [])
	.controller('ManageJobsController', ['$scope','$resource','$routeParams','$http',
		function($scope, $resource, $routeParams, $http){
			$http({
				method:'GET',
				url:'/api/allProfiles'
			}).success(function(res){
				if(res.success){
					console.log(res);
					$scope.allProfs = res.obj;
				}
			}).error(function(err){
				console.log(err);
			})
	}]);