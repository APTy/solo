// var app = angular.module('stout', []);
//
// var play = (function() {
//   var queue = [];
//
//   var add = function(text) {
//     if (queue.indexOf(text) === -1) {
//       queue.push(text);
//
//       if (queue.length === 1) {
//         play();
//       }
//     }
//   }
//
//   var play = function() {
//     responsiveVoice.speak(queue[0]);
//   }
//
//   return {
//     add: add
//   };
// })();
//
// app.controller('MainController', function($scope, $http) {
//   var data = JSON.stringify({url: 'testing'});
//
//   $scope.play = function($event) {
//     var text = $event.target.innerText;
//     play.add(text);
//   };
//
//   $scope.playAll = function() {
//     var text = '';
//     console.log($scope);
//   }
//
//   $http.post('http://localhost:3000/api', data)
//     .success(function(data) {
//       document.getElementById('title').innerHTML = data.title;
//       document.getElementById('author').innerHTML = data.author;
//       document.getElementById('content').innerHTML = data.content;
//     });
// });
