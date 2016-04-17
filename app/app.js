angular.module('movieDeathsApp', ['ui.router', 'firebase'])
.constant('firebaseRoot', 'https://moviedeaths.firebaseio.com/')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/')

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/home/homeTmpl.html',

  })
  .state('my-list', {
    url: '/my-list',
    templateUrl: './app/mylist/myListTmpl.html',

  })

  .state('all-movies', {
    url: '/all-movies',
    templateUrl: './app/allmovies/allMoviesTmpl.html',


  })


})
