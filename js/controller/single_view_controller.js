app.controller('SingleViewController', ['$scope','$routeParams', 'MovieService', function ($routeParams,$scope, MovieService) {

	MovieService.getSingleView().then(function(res){
		$scope.singleMovie = res;	
		console.log($scope.singleMovie)
	})

}]);



