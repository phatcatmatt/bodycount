angular.module('movieDeathsApp')
.controller('mainCtrl', function($scope, mainSvc, $firebaseObject, $firebaseArray, $firebaseAuth){

 //  var ref = new Firebase("https://moviedeaths.firebaseio.com/");
 //
 //  $scope.test = $firebaseArray(ref)
 //



  $scope.allMovies = null
  $scope.myMovies = [];
  var rCount = 0;

  $scope.callData = function(){
    mainSvc.getMovies().then(function(response){
      $scope.allMovies = (response)
      for(var i = 0; i < $scope.allMovies.length; i++){
        if($scope.allMovies[i].MPAA_Rating === "G"){
          rCount++;
        }
      }
    })
  }
  $scope.callData();


  $scope.addMovie = function(movie){
    $scope.myMovies.push($scope.allMovies[movie]);
    $scope.myBodyCount = 0;
    for(var i = 0; i < $scope.myMovies.length; i++){
      $scope.myBodyCount += $scope.myMovies[i].Body_Count;
    }
  }

  $scope.reset = function(){
    $scope.myMovies = [];
    $scope.myBodyCount = 0;
  }












})
