angular.module('stout.menu', [])

.controller('MenuController', function ($scope, $http, Menu) {
  $scope.news = [
    {title: 'Dow sharply lower amid rate-hike fears',
    teaser: 'NEW YORK (MarketWatch) — U.S. stocks fell sharply on Tuesday with main indexes declining more than 1%.'
    },

    {title: 'Sony confirms PS4 is heading to China',
      teaser: 'Sony has announced it\'s planning to launch the PS4 in China following the country\'s decision to lift its 14-year console ban.'
    },

    {title: 'Starbucks expands its mobile ordering service',
      teaser: 'Previously only available in Portland, Oregon, Starbucks is now bringing its mobile ordering and payments program to 650 locations in the Pacific Northwest.'
    },

    {title: 'Europe puts a cap on credit and debit card fees',
      teaser: 'On a continent where there are 1.5 plastic cards for every person, every penny saved counts.'
    },

    {title: 'The Wikimedia Foundation is suing the NSA',
      teaser: 'The nonprofit behind Wikipedia—the world’s encyclopedia—takes issue with both the US National Security Agency.'
    }

  ];

  $scope.go = function() {
    if ($scope.form.$valid) {
      Menu.getPage($scope.request);
    }
  };

  $http.get('http://localhost:3000/news')
    .success(function(responseData) {
      news = responseData;
    });

});
