angular.module('movieDeathsApp')
    .controller('mainCtrl', function($scope, mainSvc, $firebaseObject,
        $firebaseArray, $firebaseAuth, firebaseRoot) {

        var ref = new Firebase(firebaseRoot + 'moviedata/');
        $scope.allMovies = $firebaseArray(ref)


        $scope.myMovies = [];
        $scope.queryBy = '$';


        $scope.startCounters = function() {
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

        }


        $scope.addMovie = function(movie) {

            $scope.startCounters();
            $scope.myMovies.push(movie);

            for (var i = 0; i < $scope.myMovies.length; i++) {
                $scope.myBodyCount += $scope.myMovies[i].Body_Count;
                $scope.totalMinutes += $scope.myMovies[i].Length_Minutes;

                if ($scope.myMovies[i].MPAA_Rating === "M") {
                    $scope.countM++
                    $scope.myDataCountM = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "R") {
                    $scope.countR++
                    $scope.myDataCountR = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "PG-13") {
                    $scope.countPG13++
                    $scope.myDataCountPG13 = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "PG") {
                    $scope.countPG++
                    $scope.myDataCountPG = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "G") {
                    $scope.countG++
                    $scope.myDataCountG = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "Unrated") {
                    $scope.countUnrated++
                    $scope.myDataCountUnrated = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "X") {
                    $scope.countX++
                    $scope.myDataCountX = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "GP") {
                    $scope.countGP++
                    $scope.myDataCountGP = true;
                } else if ($scope.myMovies[i].MPAA_Rating === "Approved") {
                    $scope.countApproved++
                    $scope.myDataCountApproved = true;
                }
                $scope.myMovies[i].deathsPerMinute = Math.round(($scope.myMovies[i].Body_Count / $scope.myMovies[i].Length_Minutes) * 100) / 100
            }
            $scope.totalDeathsPerMinute = Math.round(($scope.myBodyCount / $scope.totalMinutes) * 100) / 100

            $scope.totalMovies = $scope.myMovies.length;
            $scope.noMoviesMessage = true;

        }

        $scope.reset = function() {
            $scope.myMovies = [];
            $scope.startCounters();
        }



    })
