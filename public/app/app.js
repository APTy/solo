var app = angular.module('app', [
  'stout.services',
  'ui.router',
  'stout.menu',
  'stout.article'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('menu', {
      url: '/',
      views: {
        '' : {
          templateUrl: 'app/menu/menu.html',
          controller: 'MenuController'
        },
        'list@menu': {
          templateUrl: 'app/menu/menu-list.html',
          controller: 'MenuController'
        }
      }
    })

    .state('article', {
      url: '/article?url',
      views: {
        '' : {
          templateUrl: 'app/article/article.html',
          controller: 'ArticleController'
        },
        'nav@article': {
          templateUrl: 'app/menu/nav.html',
          controller: 'MenuController'
        }
      }
    });


});
