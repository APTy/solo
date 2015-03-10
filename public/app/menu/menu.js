angular.module('stout.menu', [])

.controller('MenuController', function ($scope, Menu) {
  $scope.go = function() {
    Menu.getPage($scope.request);
  };
});
