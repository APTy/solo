angular.module('stout.services', [])

.factory('Menu', function($location, $http) {
  // var hostUrl = 'https://stoutt.herokuapp.com';
  hostUrl = 'http://localhost:3000';
  var page = {};

  var getPage = function(url) {
    var requestData = JSON.stringify({url: url});

    $http.post(hostUrl + '/api', requestData)
      .success(function(responseData) {
        page = responseData;
        $location.path('/article');//?url=' + url);
      });

  };

  var displayPage = function() {
    return page;
  };

  var getNews = function(cb) {
    $http.get(hostUrl + '/news')
      .success(function(responseData) {
        cb(responseData.stories);
      });
  };

  return {
    getPage: getPage,
    displayPage: displayPage,
    getNews: getNews
  };
})

.factory('Queue', function() {
  var queue = [];

  var add = function(text) {
    responsiveVoice.speak(text);
  };

  var stop = function() {
    responsiveVoice.cancel();
  };

  var play = function() {
    responsiveVoice.speak(queue[0]);
  };

  return {
    add: add,
    stop: stop
  };
});
