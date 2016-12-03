/**
 * @ngdoc overview
 * @name ngTestApp
 * @description
 * # ngTestApp
 *
 * Main module of the application.
 */
angular
  .module('ngBanking',[
    'ngRoute',
    'ui.bootstrap'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/account', {
        templateUrl: 'app/views/accounts.html'
      })
      .when('/account/:accountId', {
        templateUrl: 'app/views/account.html'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .otherwise({
        redirectTo: '/account'
      });
  }).run(['GeneralLedger', function(generalLedger) {
    generalLedger.loadAccounts();
    if (generalLedger.accounts.length === 0) {
      generalLedger.add('acct1', 'Checking Account');
      generalLedger.add('acct2', 'Savings Account');
    }    
  }]);