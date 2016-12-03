angular
  .module('ngBanking', [
    'ngRoute'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/account', {
        templateUrl: 'app/accounts.html'
      })
      .when('/account/:accountId', {
        templateUrl: 'app/account.html'
      })
      .when('/about', {
        templateUrl: 'app/about.html'
      })
      .otherwise({
        redirectTo: '/account'
      });
  }).run(['GeneralLedger', function (generalLedger) {
    generalLedger.loadAccounts();
    if (generalLedger.accounts.length === 0) {
      generalLedger.add('acct1', 'Checking Account');
      generalLedger.add('acct2', 'Savings Account');
    }
  }]);