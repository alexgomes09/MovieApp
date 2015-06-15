var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/search', {
		templateUrl: 'search.html',
		controller: 'SearchController'
	})
}]);


app.controller('MainController', function ($scope, MovieFactory) {
	MovieFactory.getMocie().success(function (data) {
			console.log(data)
		})
		//	theMovieDb.movies.getById({
		//		"page": 1,
		//		"id": 75601
		//	}, function (data) {
		//		console.log('success: ' + data)
		//	}, function (err) {
		//		console.log('error: ' + err)
		//	})
})


app.service('MovieFactory', function ($http) {
	this.getMocie = function (data) {
		return $http.get(theMovieDb.movies.getById({
			"page": 1,
			"id": 75601
		}, function (data) {
			console.log(data)
		}, function (data) {
			console.log(data);
		}))
	}
});