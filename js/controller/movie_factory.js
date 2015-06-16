app.factory('MovieFactory', function ($http) {
	var MovieFactory = {}
	MovieFactory.getMovie = function () {
		return $http.get('http://api.themoviedb.org/3/movie/popular?api_key=2601abf9eb5e1521554d92af8c07ee52&page=5')
	}
	return MovieFactory;

	//	this.getMovie = function (data) {
	//		var movie;
	//		return tmdb.call("/search/movie", {
	//			"query": data,
	//			"page": 1,
	//			"year": 2015
	//		}, function (e) {
	//			movie = e;
	//		}, function (e) {
	//			return e
	//		})
	//		console.log(movie);
	//	}
});