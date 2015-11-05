//MainCtrl.js


angular.module('MainCtrl', [])
	.controller('MainController', ['$scope','$resource','$routeParams','$http',
		function($scope, $resource, $routeParams, $http){


			$scope.submit = function(){
				var dataObj = {
					firstName: $scope.firstName,
					lastName:$scope.lastName
				}
				$http({
					method:'PUT',
					url:'/api/getCode',
					data:dataObj
				}).success(function(res){
					if(res.success){
						$scope.success = true;
						console.log(res.obj);
						$scope.firstName = res.obj.firstName;
						$scope.lastName = res.obj.lastName;
						$scope.code = res.obj.code;
					}
					else{
						$scope.success = false;
						$scope.fail = true;
					}
				})
			}
	}]);