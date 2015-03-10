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
});
