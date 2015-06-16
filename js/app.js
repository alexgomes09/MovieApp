var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/search', {
		templateUrl: 'search.html',
		controller: 'SearchController'
	})
}]);