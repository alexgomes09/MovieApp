app.service('MovieService', function ($q) {

	var movie = this;
	movie.getMovie = function (page,sort) {
		var defer = $q.defer()
		theMovieDb.discover.getMovies({
			"page": page,
			"sort_by":sort
		}, function (data) {
			defer.resolve(data);
		}, function (err) {
			defer.reject(err)
		})
		return defer.promise;
	}
	
	movie.getPopularMovie = function(page){
		var defer = $q.defer()
		theMovieDb.movies.getPopular({
			"page": page
		}, function (data) {
			defer.resolve(data);
		}, function (err) {
			defer.reject(err)
		})
		return defer.promise;
	}
	
	return movie;
})