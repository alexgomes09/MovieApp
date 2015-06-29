app.controller('InfoController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getPopularMovie(1).then(function (data) {
		var popularMovies = [];
		var genreName = [];
		for (var i = 0; i < data.results.length; i++) {
			// console.log(data.results[i])
			popularMovies.push(data.results[i]);

			MovieService.getGenreName(data.results[i].genre_ids).then(function(res){
				genreName.push(res);
				for(var j = 0; j < popularMovies.length; j++) {
					popularMovies[j]['genre_name'] = genreName[j];
				};
			});
		}
		$scope.popularMovies = popularMovies;
		$scope.imageSize = "w185";
	});

	$scope.setSingleView = function(data){
		MovieService.setSingleView(data);
	}

}])





