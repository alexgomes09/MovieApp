app.controller('InfoController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getPopularMovie(1).then(function (data) {
		var popularMovies = [];

		for (var i = 0; i < data.results.length; i++) {
			popularMovies.push(data.results[i]);
		}
		$scope.popularMovies = popularMovies;
		$scope.imageSize = "w300";
		$scope.changeLength = function (text) {
			text.overview.textLength = 999;
		}
		console.log($scope.popularMovies)

	});
	$scope.moving = function (movie) {
		console.log(movie);
	};

}])
//			MovieService.getImage("w300", data.results[i].poster_path).then(function (res) {
//				popularMoviesImage.push(res);
//				$scope.popularMoviesImage = popularMoviesImage;
//			})


	