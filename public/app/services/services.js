angular.module('stout.services', [])

.factory('Menu', function() {
  var getPage = function() {
    console.log('gettin page');
  };

  return {
    getPage: getPage
  }
});
