angular.module('stout.services', [])

.factory('Menu', function($location, $http) {
  var page = {};

  var getPage = function(url) {
    var requestData = JSON.stringify({url: url});

    $http.post('http://localhost:3000/api', requestData)
      .success(function(responseData) {
        page = responseData;
        $location.path('/article');
      });

  };

  var displayPage = function() {
    return page;
  };

  return {
    getPage: getPage,
    displayPage: displayPage
  };
})

.factory('Queue', function() {
  var queue = [];

  var add = function(text) {
    if (queue.indexOf(text) === -1) {
      queue.push(text);

      if (queue.length === 1) {
        play();
      }
    }
  }

  var play = function() {
    responsiveVoice.speak(queue[0]);
  }

  return {
    add: add
  };
});
