angular.module('stout.article', ['ngSanitize'])

.controller('ArticleController', function($scope, Menu) {
  $scope.page = Menu.displayPage();

  $scope.play = function($event) {
    // var text = $event.target.innerText;
    // play.add(text);
  };

  $scope.playAll = function() {
    // var text = '';
    // console.log($scope);
  };

});
