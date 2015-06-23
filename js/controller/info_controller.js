app.controller('InfoController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getPopularMovie(1).then(function (data) {
		var popularMovies = [];
		var genreName = []
		for (var i = 0; i < data.results.length; i++) {
			// console.log(data.results[i])
			popularMovies.push(data.results[i]);

			MovieService.getGenreName(data.results[i].genre_ids).then(function(res){
				genreName.push(res);
				for(var j = 0; j < popularMovies.length; j++) {
					popularMovies[j]['genre_name'] = genreName[j];
					// obj[j]['genre_name'] = genreName[j];
				};
			});
		}
		console.log(popularMovies)
		$scope.popularMovies = popularMovies;
		$scope.imageSize = "w300";

	});

}])
//			MovieService.getImage("w300", data.results[i].poster_path).then(function (res) {
//				popularMoviesImage.push(res);
//				$scope.popularMoviesImage = popularMoviesImage;
//			})


