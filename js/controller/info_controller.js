app.controller('InfoController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getPopularMovie(1).then(function (data) {
		var popularMovies = [];
		for (i = 0; i < data.results.length; i++) {
			popularMovies.push(data.results[i]);
		}
		$scope.data = popularMovies;
		console.log(popularMovies)
	});

}])


//			MovieService.getImage("w300",data.results[i].poster_path).then(function(data){
//				
//			})