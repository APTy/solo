angular.module('stout.menu', [])

.controller('MenuController', function ($scope, $http, Menu) {
  $scope.news = [{description: 'loading content'}];

  $scope.go = function() {
    if ($scope.form.$valid) {
      Menu.getPage($scope.request);
    }
  };

  $http.get('http://localhost:3000/news')
    .success(function(responseData) {
      $scope.news = responseData.stories;
    });

});
