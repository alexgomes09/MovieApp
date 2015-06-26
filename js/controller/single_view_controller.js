app.controller('SingleViewController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getSingleView().then(function(res){
		$scope.movie = res;	
	})
	var a = angular.element('.genre-list').find('li h5').contents();
	console.log(a`);

}]);