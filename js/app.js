var app = angular.module("movieApp", ['ngRoute']);

var rooturl = 'http://localhost/Movie_App/views/'

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: rooturl+'latest.html',
		controller: 'InfoController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);