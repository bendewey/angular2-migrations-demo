angular
  .module('ngBanking', [
    'ngRoute'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/account', {
        templateUrl: 'app/accounts.html'
      })
      .when('/account/:accountId', {
        templateUrl: 'app/account.html',
        controller: 'accountCtrl'
      })
      .when('/about', {
        templateUrl: 'app/about.html'
      })
      .otherwise({
        redirectTo: '/account'
      });
  }).run(['$rootScope', '$location', function ($rootScope, $location) {

    $rootScope.accounts = [
      { id: '1', name: "Checking Account", ledger: [], balance: 0 },
      { id: '2', name: "Savings Account", ledger: [], balance: 0 }
    ];

    $rootScope.getActiveClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    };
  }]);