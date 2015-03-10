angular.module('stout.article', ['ngSanitize'])

.controller('ArticleController', function($scope, Menu, Queue) {
  $scope.page = Menu.displayPage();

  $scope.play = function($event) {
    var text = $event.target.innerText;
    Queue.add(text);
  };

  $scope.playAll = function() {
    // var text = $scope.page.content;
    // Queue.add(text);
    // console.log(text);
  };

});
