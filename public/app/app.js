var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('/', {
        url: '/',
        templateUrl: 'app/menu/menu.html'
    })

    .state('/article', {

    });

});
