angular.module('movieDeathsApp')
    .service('mainSvc', function($http, $firebaseObject, $firebaseArray, $firebaseAuth) {

        this.getMovies = function() {
            return $http.get('./app/moviedata.json')
                .then(function(response) {
                    return response.data
                })
        }

    })
