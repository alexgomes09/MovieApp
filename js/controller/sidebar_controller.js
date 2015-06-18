app.controller('SidebarController', ['$scope', 'MovieService', function ($scope, MovieService) {

	$scope.sidebar = "Sidebar";
	MovieService.getMovie(2, "popularity.asc&primary_release_date.asc").then(function (data) {
		for (i = 0; i < data.results.length; i++) {
			//console.log(data.results[i].title +"  "+ data.results[i].release_date);

			for (j = 0; j < data.results[i].genre_ids.length; j++) {}

		}
	});

	MovieService.getPopularMovie(1).then(function (data) {
		for (i = 0; i < data.results.length; i++) {
			console.log(data.results[i].title+"  "+data.results[i].release_date);
			//console.log(data.results[i].title +"  "+ data.results[i].release_date);
		}
	});


}])