app.controller('SingleViewController', ['$scope','MovieService', function ($scope,MovieService) {

	MovieService.getSingleView().then(function(res){
		$scope.movie = res;
		$scope.imageSize="w300";
		$scope.castImageSize="w185";

		MovieService.getCredit(res.id).then(function(data){
			$scope.casts = data.cast;
			for (var i = 0; i < data.crew.length; i++) {
				if(data.crew[i].job==="Director"){
					$scope.director = data.crew[i];
				}
			};
		})

		MovieService.getImages().then(function(res){
			$scope.backdrops = res.backdrops;
		})
	});


	$scope.modalShown = false;
	$scope.toggleModal = function(){
		$scope.modalShown = !$scope.modalShown;
	}


}]);

