app.controller('SingleViewController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getSingleView().then(function(res){
		$scope.movie = res;	
	})

}]);