angular.module('stout.menu', [])

.controller('MenuController', function ($scope, $http, Menu) {
  $scope.news = [{description: 'loading content'}];

  $scope.go = function() {
    if ($scope.form.$valid) {
      Menu.getPage($scope.request);
    }
  };

  Menu.getNews(function(news) {
    $scope.news = news;
  });
});
