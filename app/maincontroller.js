angular.module('movieDeathsApp').controller('mainCtrl', function($scope, mainSvc){

  $scope.callData = function(){
    mainSvc.getMovies().then(function(response){
      $scope.allMovies = response;
    })
  }
  $scope.callData();


  var clickTitle = function(){
    !$scope.showCount;
  }

})
