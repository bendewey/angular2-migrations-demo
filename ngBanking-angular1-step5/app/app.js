angular
    .module('ngBanking', [
    'ngRoute',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/account', {
            template: '<accounts-view></accounts-view>'
        })
            .when('/account/:accountId', {
            template: '<account-view></account-view>'
        })
            .when('/about', {
            template: '<about-view></about-view>'
        })
            .otherwise({
            redirectTo: '/account'
        });
    }]).run(['GeneralLedger', function (generalLedger) {
        generalLedger.loadAccounts();
        if (generalLedger.accounts.length === 0) {
            generalLedger.add('acct1', 'Checking Account');
            generalLedger.add('acct2', 'Savings Account');
        }
    }]);
//# sourceMappingURL=app.js.map