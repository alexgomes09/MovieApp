app.controller('MainController', function ($scope, MovieFactory) {
	MovieFactory.getMovie().success(function (data) {
		//		console.log(data);
	})
})