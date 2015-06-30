app.controller('SingleViewController', ['$scope', 'MovieService', function ($scope, MovieService) {

	MovieService.getSingleView().then(function(res){
		$scope.movie = res;
		$scope.imageSize="w300";

		MovieService.getCredit(res.id).then(function(data){
			$scope.casts = data.cast;
			$scope.crewes = data.crew;
		})
	})

	$scope.modalShown = false;
	$scope.toggleModal = function(){
		$scope.modalShown = !$scope.modalShown;
	}


}]);