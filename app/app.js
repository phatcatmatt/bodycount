angular.module('movieDeathsApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/')

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/home/homeTmpl.html',
    controller: 'mainCtrl'

  })
  .state('my-list', {
    url: '/my-list',
    templateUrl: './app/mylist/myListTmpl.html',
    controller: 'mainCtrl'

  })

  .state('all-movies', {
    url: '/all-movies',
    templateUrl: './app/allmovies/allMoviesTmpl.html',
    controller: 'mainCtrl'

  })


})
