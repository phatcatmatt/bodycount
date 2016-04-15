angular.module('movieDeathsApp')
.service('death', function($http){

  this.getMovies = function(){
    console.log("hi again")
    return $http({
      method: 'GET',
      url: './app/moviedata.json'
    }).then(function(response){
      console.log(response)
      return response;
    });
  };


})
