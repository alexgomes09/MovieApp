var app = angular.module("movieApp", ['ngRoute']);

var rooturl = 'http://localhost/Movie_App/views/';

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/popular', {
		templateUrl: rooturl + 'popular.html',
		controller: 'InfoController'
	}).
	when('/movie',{
		templateUrl:rooturl+'single_view.html',
		controller:'SingleViewController'
	}).
	otherwise({
		redirectTo: '/popular'
	});
}]);


app.filter('cut', function () {
	return function (value, wordwise, max, tail) {
		if (!value) return '';

		max = parseInt(max, 10);
		if (!max) return value;
		if (value.length <= max) return value;

		value = value.substr(0, max);
		if (wordwise) {
			var lastspace = value.lastIndexOf(' ');
			if (lastspace != -1) {
				value = value.substr(0, lastspace);
			}
		}

		return value + (tail || ' …');
	};
});


app.directive('tooltip', function () {
	return function ($scope, element) {
		$(element).hover(function () {
			var movie = $.parseJSON($(this).find('#info').text());
			
			$('<div class="tooltip"></div>')
			.html("<h4>" + movie.title + "</h4>" + "<strong>Genre: </strong>"+movie.genre_name+"<br><br>" + movie.overview + "<br><br><strong>Released: </strong>" + movie.release_date +
				"<strong><br>Vote Count: </strong>"+ movie.vote_average.toFixed(1)+"/10"+"<br>")
			.appendTo('body')
			.fadeIn('fast');
		}, function () {
			$('.tooltip').remove();
		}).mousemove(function (e) {
			var mousex = e.pageX-300; //Get X coordinates
			var mousey = e.pageY - 50; //Get Y coordinates
			$('.tooltip').css({ top: mousey, left: mousex });
		});
	}
});

