var app = angular.module('app', [
  'ui.router',
  'stout.menu',
  'stout.article',
  'stout.services'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('/', {
      url: '/',
      templateUrl: 'app/menu/menu.html',
      controller: 'MenuController'
    })

    .state('/article', {
      url: '/article',
      templateUrl: 'app/article/article.html',
      controller: 'ArticleController'
    });

});
