var app = angular.module("movieApp",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/search',{
        templateUrl:'search.html',
        controller :'SearchController'
    })
}]);


app.controller('MainController',function($scope,$rootScope){
    $scope.test = "HELLO";
    $rootScope.$broadcast("TAG",$scope.test);
})

app.controller('testController',function($scope,$rootScope){
    
    $scope.$on("TAG",function (event,msg) {
        console.log(msg);
        console.log(event);
    });
})

