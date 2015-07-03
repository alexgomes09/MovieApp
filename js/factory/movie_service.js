app.service('MovieService', function ($q, $location) {

	var movie = this;
	var singleMovieId;
	movie.setSingleView = function(movieID){
		singleMovieId = movieID;
	}
	movie.getSingleView = function(){
		var defer = $q.defer();
		if(singleMovieId !== undefined || singleMovieId >=1){
			theMovieDb.movies.getById({
				"id":singleMovieId
			},function(res){
				defer.resolve(res);
			},function(err){
				defer.reject(err);
			});
		}else{
			$location.path('/popular');
		}

		return defer.promise;
	}

	//get single movie backdrop/poster image
	movie.getImages = function(){
		var defer = $q.defer();
		theMovieDb.movies.getImages({
			"id":singleMovieId
		},function(res){
			defer.resolve(res)
		},function(err){
			defer.reject(err)
		})
		return defer.promise;
	}
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

	// get popular movie with certain parameter
	movie.getCredit = function (id) {
		var defer = $q.defer()
		theMovieDb.movies.getCredits({
			"id": id
		}, function (res) {
			defer.resolve(res);
		}, function (err) {
			defer.reject(err)
		})
		return defer.promise;
	}


	//get genre name because genre_id is given
	movie.getGenreName = function (genList) {
		var defer = $q.defer();
		theMovieDb.genres.getList({},
			function (res) {
				var customArray = [];
				var actualArray = [];
				for (var i = 0; i < res.genres.length; i++) {
					customArray.push(res.genres[i].id);
				}
				for (var i = 0; i < genList.length; i++) {
					actualArray.push(res.genres[customArray.indexOf(genList[i])].name)
				};
				defer.resolve(actualArray);
			},
			function (err) {
				defer.reject(err);
			})
		return defer.promise;
	}


	return movie;
})
