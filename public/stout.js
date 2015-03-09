var app = angular.module('stout', []);

app.controller('MainController', function($scope, $http) {
  var data = JSON.stringify({url: 'testing'});

  $http.post('http://localhost:3000/api', data)
    .success(function(data) {
      document.getElementById('content').innerHTML = data.content;
    });
});
