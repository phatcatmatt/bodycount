angular.module('movieDeathsApp')
    .controller('mainCtrl', function($scope, mainSvc, $firebaseObject,
        $firebaseArray, $firebaseAuth, firebaseRoot) {

// connect with firebase to get all movie data and initiate lists

        var ref = new Firebase(firebaseRoot + 'moviedata/');
        $scope.allMovies = $firebaseArray(ref)

        $scope.myMovies = [];
        $scope.queryBy = '$';
        $scope.removedMovies = []

        $scope.addMovie = function(movie) {
            $scope.myMovies.push(movie);
            $scope.runCounters();
          }

// runs every time the user's list is changed to update stats (deaths per minute, ratings totals, total deaths, etc)

          $scope.runCounters = function(){

            $scope.myBodyCount = 0;
            $scope.deathsPerMinute = 0;
            $scope.totalMinutes = 0;
            $scope.countM = 0;
            $scope.countR = 0;
            $scope.countPG13 = 0;
            $scope.countPG = 0;
            $scope.countG = 0;
            $scope.countUnrated = 0;
            $scope.countX = 0;
            $scope.countApproved = 0;
            $scope.countGP = 0;
            $scope.totalMovies = 0;
            $scope.myDataCountX = false;
            $scope.myDataCountM = false;
            $scope.myDataCountR = false;
            $scope.myDataCountPG13 = false;
            $scope.myDataCountPG = false;
            $scope.myDataCountG = false;
            $scope.myDataCountUnrated = false;
            $scope.myDataCountApproved = false;
            $scope.myDataCountGP = false;
            $scope.noMoviesMessage = false;

            for (var i = 0; i < $scope.myMovies.length; i++) {

                $scope.myBodyCount += $scope.myMovies[i].Body_Count;
                $scope.totalMinutes += $scope.myMovies[i].Length_Minutes;
                $scope.myMovies[i].deathsPerMinute = Math.round(($scope.myMovies[i].Body_Count / $scope.myMovies[i].Length_Minutes) * 100) / 100;
                $scope.totalDeathsPerMinute = Math.round(($scope.myBodyCount / $scope.totalMinutes) * 100) / 100;
                $scope.totalMovies = $scope.myMovies.length;
                $scope.noMoviesMessage = true;

                switch ($scope.myMovies[i].MPAA_Rating) {
                  case "M":
                    $scope.countM++;
                    $scope.myDataCountM = true;
                    break;

                  case "R":
                    $scope.countR++;
                    $scope.myDataCountR = true;
                    break;

                  case "PG-13":
                    $scope.countPG13++;
                    $scope.myDataCountPG13 = true;
                    break;

                  case "PG":
                    $scope.countPG++;
                    $scope.myDataCountPG = true;
                    break;

                  case "G":
                    $scope.countG++;
                    $scope.myDataCountG = true;
                    break;

                  case "Unrated":
                    $scope.countUnrated++;
                    $scope.myDataCountUnrated = true;
                    break;

                  case "X":
                    $scope.countX++;
                    $scope.myDataCountX = true;
                    break;

                  case "GP":
                    $scope.countGP++;
                    $scope.myDataCountGP = true;
                    break;

                  case "Approved":
                    $scope.countApproved++;
                    $scope.myDataCountApproved = true;
                    break;

                }
            }
        }


// functions for resetting a user's list, removing and restoring movies to a user's list, and enabling and disabling adding movies
        $scope.reset = function() {
            for (var i = 0; i < $scope.myMovies.length; i++) {
              $scope.movieEnable($scope.myMovies[i])
            }
            $scope.myMovies = [];
            $scope.removedMovies = [];
            $scope.runCounters();

        }

        $scope.removeMovie = function(movie){
          $scope.removedMovies.push($scope.myMovies[movie])
          $scope.myMovies.splice([movie], 1);
          $scope.runCounters();
        }

        $scope.restoreMovie = function(movie){
          $scope.myMovies.push($scope.removedMovies[movie])
          $scope.removedMovies.splice([movie], 1);
          $scope.runCounters();
        }


        $scope.movieDisable = function(film){
          film.disabled = true;
        }

        $scope.movieEnable = function(film){
          film.disabled = false;
        }

    })
