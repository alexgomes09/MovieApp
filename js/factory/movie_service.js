app.service('MovieService', function ($q) {

	var movie = this;
	var singleViewData = {};
	movie.setSingleView = function(data){
		singleViewData = data;
	}
	movie.getSingleView = function(){
		var defer = $q.defer();
		defer.resolve(singleViewData)
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

function arraysEqual(a1,a2) {
	return JSON.stringify(a1)==JSON.stringify(a2);
}