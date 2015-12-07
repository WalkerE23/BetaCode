// JobsCtrl.js

angular.module('CreateJobCtrl', [])
	.controller('CreateJobController', ['$scope','$resource','$routeParams','$http',
		function($scope, $resource, $routeParams, $http){




			$scope.createJob = function(){
				//validate data
				var dataIsValid = true;
				var ignoreDates = false;
				//payment is negative
				if($scope.jobPayment < 0){
					console.log("caught the bad payment");
					$scope.alerts = [{type: 'danger', msg: 'Payment must be 0 or greater'}];
					dataIsValid = false;
				}
				//job starts after it ends (ex start july 1, 2015 end june 1, 2015)
				if(!$scope.noDates){
					if($scope.jobStart > $scope.jobEnd){
						$scope.alerts = [{type: 'danger', msg: 'Start date must be before (or the same day as) end date'}];
						dataIsValid = false;
					}
				}
				if(dataIsValid == true){
					var newJob = {
						owner: "56424a2ad4477d730b70494b",
						owner_name:"IndieLoop",
						name: $scope.jobName,
						location: {
							city:$scope.jobLocCty,
							state:$scope.jobLocSt
						},
						startDate: $scope.jobStart,
						endDate: $scope.jobEnd,
						contact_email: $scope.jobContact,
						about_statement: $scope.description,
						type: $scope.jobType,
						important_people:{
							writer: $scope.writer,
							producer: $scope.producer,
							director: $scope.director
						}
					}
					if($scope.noDates){
						newJob.endDate = null;
						newJob.startDate = null;
						newJob.noDate = true;
					}
					$http({
						method:'POST',
						url:'/api/createNewJob',
						data:newJob
					}).success(function(res){
						if(res.success){
							window.location = "/";
						}
					})
				}
			}
	}]);