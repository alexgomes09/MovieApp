var app = angular.module("movieApp", ['ngRoute']);

var rooturl = 'http://localhost/Movie_App/views/';

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/popular', {
		templateUrl: rooturl + '/popular.html',
		controller: 'InfoController'
	}).
		when('/top_rated', {
		templateUrl: rooturl + '/latest.html',
		controller: 'InfoController'
	}).
		when('/upcoming', {
		templateUrl: rooturl + '/latest.html',
		controller: 'InfoController'
	}).
		when('/now_playing', {
		templateUrl: rooturl + '/latest.html',
		controller: 'InfoController'
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
			var info = $.parseJSON($(this).find('#info').text());
			
			$('<div class="tooltip"></div>')
				.html("<h4>" + info.title + "</h4>" + "<br>" + info.overview + "<br><br><strong>Released: </strong>" + info.release_date)
				.appendTo('body')
				.fadeIn('normal');
		}, function () {
				$('.tooltip').remove();
			}).mousemove(function (e) {
			var mousex = e.pageX-200; //Get X coordinates
			var mousey = e.pageY - 50; //Get Y coordinates
			$('.tooltip').css({ top: mousey, left: mousex });
		});
	}
});


// app.directive('tooltip', function () {
// 	return function ($scope, element) {
// 		$(element).hover(function () {
// 			// Hover over code
// 			var title = $(this).attr('title');
// 			$(this).data('tipText', title).removeAttr('title');
// 			$('<p class="tooltip"></p>')
// 				.html(title)
// 				.appendTo('body')
// 				.fadeIn('normal');
// 		}, function () {
// 				// Hover out code
// 				$(this).attr('title', $(this).data('tipText'));
// 				$('.tooltip').remove();
// 			}).mousemove(function (e) {
// 			var mousex = e.pageX-200; //Get X coordinates
// 			var mousey = e.pageY - 50; //Get Y coordinates
// 			$('.tooltip')
// 				.css({ top: mousey, left: mousex })
// 		});
// 	}
// });