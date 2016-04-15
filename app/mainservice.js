angular.module('movieDeathsApp').service('mainSvc', function($http, $q){

this.getMovies = function(){

return $http.get('./app/moviedata.json')
  .then(function(response){
    return response.data
  })

}


})
