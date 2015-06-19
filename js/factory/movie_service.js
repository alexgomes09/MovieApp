app.service('MovieService', function ($q) {

	var movie = this;

	//genre
	movie.getMovieGenres = function () {
		var defer = $q.defer();
		theMovieDb.genres.getList({},
			function (res) {
				defer.resolve(res);
			},
			function (err) {
				defer.reject(err);
			})
		return defer.promise;
	}

	// get Popular movie
	movie.getPopularMovie = function (page) {
		var defer = $q.defer()
		theMovieDb.movies.getPopular({
			"page": page
		}, function (res) {
			defer.resolve(res);
		}, function (err) {
			defer.reject(err)
		})
		return defer.promise;
	}
	
	// get single poster/backdrop image
	movie.getImage = function(size,file){
		var defer = $q.defer();
		var a = [],obj={};
		a.push(theMovieDb.common.getImage({
			"size": size,
			"file":file
		}))
		obj = a;
		defer.resolve(obj)
		return defer.promise;
	}
	
	//get specific movie images
	movie.getImages = function(id){
		var defer = $q.defer();
		theMovieDb.movies.getImages({
			"id": id
		}, function (res) {
			defer.resolve(res);
		}, function (err) {
			defer.reject(err)
		})
		return defer.promise;
	}

	return movie;
})