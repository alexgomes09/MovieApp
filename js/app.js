var app = angular.module("movieApp", ['ngRoute']);

var rooturl = 'http://localhost/Movie_App/views/'

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/popular', {
		templateUrl: rooturl+'/popular.html',
		controller: 'InfoController'
	}).
	when('/top_rated', {
		templateUrl: rooturl+'/latest.html',
		controller: 'InfoController'
	}).
	when('/upcoming', {
		templateUrl: rooturl+'/latest.html',
		controller: 'InfoController'
	}).
	when('/now_playing', {
		templateUrl: rooturl+'/latest.html',
		controller: 'InfoController'
	}).
	otherwise({
		redirectTo: '/popular'
	});
}]);