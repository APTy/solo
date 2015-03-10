angular.module('stout.article', ['ngSanitize'])

.controller('ArticleController', function($scope, Menu, Queue) {
  $scope.page = Menu.displayPage($scope);

  $scope.play = function($event) {
    $p = $event.target;

    if ($p.className === 'playing') {
      $p.className = ''
      Queue.stop();
    } else {
      var text = $p.innerText;
      $p.className = 'playing';
      Queue.add(text);
    }
  };

  $scope.stop = function() {
    Queue.stop();
  }

  $scope.playAll = function() {
    // var text = $scope.page.content;

    // Queue.add(text);
    // console.log(text);
  };



});
