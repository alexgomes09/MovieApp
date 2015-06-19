app.controller('InfoController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getPopularMovie(1).then(function (data) {
		for (i = 0; i < data.results.length; i++) {
//			console.log(data.results[i].poster_path);
			MovieService.getImage("w300",data.results[i].poster_path).then(function(data){
				$scope.image = data
				
				//console.log($scope.image)
				
			})			
		}
	});

}])