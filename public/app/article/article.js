angular.module('stout.article', [])

.controller('ArticleController', function($scope) {
  $scope.page = {
      title: 'Hello',
      author: 'Tyler Julian',
      content: 'This is what\'s up'
    };

  $scope.play = function($event) {
    // var text = $event.target.innerText;
    // play.add(text);
  };

  $scope.playAll = function() {
    // var text = '';
    // console.log($scope);
  };

});
