angular.module('movieDeathsApp')
.controller('mainCtrl', function($scope, mainSvc, $firebaseObject, $firebaseArray, $firebaseAuth){

 //  var ref = new Firebase("https://moviedeaths.firebaseio.com/");
 //
 //  $scope.test = $firebaseArray(ref)
 //



  $scope.allMovies = null
  $scope.myMovies = [];


  $scope.callData = function(){
    mainSvc.getMovies().then(function(response){
      $scope.allMovies = (response)
    })
  }
  $scope.callData();


  $scope.addMovie = function(movie){
    $scope.myMovies.push($scope.allMovies[movie]);
    $scope.myBodyCount = 0;
    $scope.totalMinutes = 0;
    $scope.countM = 0;
    $scope.countR = 0;
    $scope.countPG13 = 0;
    $scope.countPG = 0;
    $scope.countG = 0;
    $scope.countUnrated = 0;

    for(var i = 0; i < $scope.myMovies.length; i++){
      $scope.myBodyCount += $scope.myMovies[i].Body_Count;
      $scope.totalMinutes += $scope.myMovies[i].Length_Minutes; 
      if($scope.myMovies[i].MPAA_Rating === "M"){
        $scope.countM++
      }
      else if($scope.myMovies[i].MPAA_Rating === "R"){
        $scope.countR++
      }
      else if($scope.myMovies[i].MPAA_Rating === "PG-13"){
        $scope.countPG13++
      }
      else if($scope.myMovies[i].MPAA_Rating === "PG"){
        $scope.countPG++
      }
      else if($scope.myMovies[i].MPAA_Rating === "G"){
        $scope.countG++
      }
      else if($scope.myMovies[i].MPAA_Rating === "Unrated"){
        $scope.countUnrated++
      }
    }
    $scope.deathsPerMinute = Math.round(($scope.myBodyCount / $scope.totalMinutes) * 100) / 100
  }

  $scope.reset = function(){
    $scope.myMovies = [];
    $scope.myBodyCount = 0;
    $scope.deathsPerMinute = 0;
    $scope.totalMinutes = 0;
    $scope.countM = 0;
    $scope.countR = 0;
    $scope.countPG13 = 0;
    $scope.countPG = 0;
    $scope.countG = 0;
    $scope.countUnrated = 0;
  }












})
