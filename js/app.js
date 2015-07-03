var app = angular.module("movieApp", ['ngRoute','angular-carousel']);

var rooturl = '../views/';

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/popular', {
		templateUrl: rooturl + 'popular.html',
		controller: 'InfoController'
	}).
	when('/:movie',{
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


app.directive('tooltip',[ '$filter' ,function ($filter) {
	return function ($scope, element) {
		$(element).hover(function () {
			var movie = $.parseJSON($(this).find('#info').text());
			$('.tooltip').css('transform','scale(1.25)');			
			$('<div class="tooltip"></div>')
			.html("<h4>" + movie.title + "</h4>" + 
				"<strong>Genre: </strong>"+movie.genre_name+
				"<br><br><strong>Overview: </strong>" + movie.overview + 
				"<br><br><strong>Released: </strong>" + $filter('date')(movie.release_date,"yyyy-MMMM-d") +
				"<strong><br>Vote Count: </strong>"+ movie.vote_average.toFixed(1)+"/10"+"<br>")
			.appendTo('body')
			.fadeIn('fast');
		}, function () {
			$('.tooltip').remove();
		}).mousemove(function (e) {
	var mousex = e.pageX-300; //Get X coordinates
	var mousey = e.pageY - 50; //Get Y coordinates
	$('.tooltip').css({ top: mousey, left: mousex });
}).on("click",function(){
	$('.tooltip').remove();
});
}
}]);

app.directive('link',function(){
	return {
		restrict: 'A',
		link: function($scope,attrs){
			var link = attrs.href;
			var customizedLink = $scope.movie.title.replace(/ /g,"_");
			$scope.customizedLink = customizedLink;
		}
	}

})

app.directive('modal', function() {
	return {
		restrict: 'E',
		scope: {
			show: '='
		},
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
    	scope.hideModal = function() {
    		scope.show = false;
    		$('body').css('overflow', 'auto');
    	};
    },
    template: "<div class='ng-modal' ng-show='show'>"+
    "<div class='reveal-modal' ng-show='show'>"+
    "<div ng-transclude></div>"+
    "<a class='close-reveal-modal' ng-click='hideModal()'>&#215;</a>"+
    "</div>"+
    "<div class='reveal-modal-bg' ng-click='hideModal()'></div>"+
    "</div>"
};
});

app.directive('slick',function($timeout){
	return function(scope, el, attrs) {
		if(scope.$last){
			$(document).foundation()
		}
	}
})
// app.directive("rating",function($compile){
	// 	return{
		// 		restrict:"A",
		// 		link:function($scope,element,attrs){
			// 			setTimeout(function () {
				// 				var html = '<span>' + $scope.movie.title + '</span>';
				// 				var star = [];
				// 				for (var i = 0; i <= 9; i++) {
					// 					star.push('<span>☆</span>');
					// 				}

					// 				var a = star.join("");
					// 				var e = $compile(a+html)($scope);

					// 				element.replaceWith(e);
					// 			});
// }
// } 
// })


