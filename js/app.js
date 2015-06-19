var app = angular.module("movieApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '/views/index.html',
		controller: 'InfoController'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);