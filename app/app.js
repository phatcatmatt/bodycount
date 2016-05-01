angular.module('movieDeathsApp', ['ui.router', 'firebase'])
    .constant('firebaseRoot', 'https://moviedeaths.firebaseio.com/')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('my-data', {
                url: '/my-data',
                templateUrl: './app/mydata/myDataTmpl.html'
            })

            .state('my-list', {
                url: '/my-list',
                templateUrl: './app/mylist/myListTmpl.html'
            })

            .state('all-movies', {
                url: '/',
                templateUrl: './app/allmovies/allMoviesTmpl.html'

            });

    });
  
