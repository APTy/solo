angular.module('stout.services', [])

.factory('Menu', function($location) {
  var data = {
    title: 'Hello',
    author: 'Tyler Julian',
    content: 'This is what\'s up'
  };

  var getPage = function() {
    console.log('gettin page');
    $location.path('/article');

    // $http.post('http://localhost:3000/api', data)
    //   .success(function(data) {
    //     document.getElementById('title').innerHTML = data.title;
    //     document.getElementById('author').innerHTML = data.author;
    //     document.getElementById('content').innerHTML = data.content;
    //   });
  };

  var displayPage = function() {

  }

  return {
    getPage: getPage
  }
});
