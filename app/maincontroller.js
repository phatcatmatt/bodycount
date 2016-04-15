angular.module('movieDeathsApp').controller('mainCtrl', function($scope, mainSvc){

$scope.allMovies = null

  $scope.callData = function(){
    mainSvc.getMovies().then(function(response){
      $scope.allMovies = (response)
      var rCount = 0;
      for(var i = 0; i < $scope.allMovies.length; i++){
        if($scope.allMovies[i].MPAA_Rating === "G"){
          rCount++;
        }
      }
      console.log(rCount)

    })
  }
  $scope.callData();




})
