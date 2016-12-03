(function(undefined) {
    var app = angular.module('ngBanking');

    app.controller('accountCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {

        $scope.newDescription = '';
        $scope.newAmount = '';
        $scope.billTo = '';
        $scope.billAmount = '';
        $scope.account = getAccountById($routeParams.accountId);
        $scope.ledger = $scope.account.ledger;

        function getAccountById(id) {
            var acct;
            $rootScope.accounts.forEach(function (a) {
                if (a.id === id) {
                    acct = a;
                }
            });
            return acct;
        }

        function sumLedger(ledger) {
            var bal = 0;
            ledger.forEach(function (transaction) {
                bal += +transaction.amount;
            });
            return bal;
        }

        $scope.addTransaction = function() {
            if ($scope.deposit.$valid) {
                var item = {
                    description: $scope.newDescription,
                    amount: $scope.newAmount
                };
                $scope.account.ledger.push(item);
                $scope.account.balance = sumLedger($scope.account.ledger);
                $scope.newDescription = '';
                $scope.newAmount = '';
                $scope.deposit.$setUntouched();
            }
        };

        $scope.payBill = function() {
            if ($scope.billPay.$valid) {
                var item = {
                    description: $scope.billTo,
                    amount: -$scope.billAmount
                };
                $scope.account.ledger.push(item);
                $scope.account.balance = sumLedger($scope.account.ledger);
                $scope.billTo = '';
                $scope.billAmount = '';
                $scope.billPay.$setUntouched();
            }
        };
    }]);


})();