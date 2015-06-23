app.controller('SidebarController', ['$scope', 'MovieService', function ($scope, MovieService) {

	$scope.movieGenres;
	MovieService.getMovieGenres().then(function(data){
		$scope.movieGenres = data.genres;
	})
}])