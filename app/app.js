angular.module('movieDeathsApp', ['ui.router', 'firebase'])
    .constant('firebaseRoot', 'https://moviedeaths.firebaseio.com/')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('my-data', {
                url: '/my-data',
                templateUrl: './app/views/mydata/myDataTmpl.html'
            })

            .state('my-list', {
                url: '/my-list',
                templateUrl: './app/views/mylist/myListTmpl.html'
            })

            .state('all-movies', {
                url: '/',
                templateUrl: './app/views/allmovies/allMoviesTmpl.html'

            });

    });
