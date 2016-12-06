(function(undefined) {
    var app = angular.module('ngBanking');

    app.controller('accountCtrl', ['$scope', '$routeParams', 'GeneralLedger', function($scope, $routeParams, generalLedger) {

        var vm = this;

        vm.newDescription = '';
        vm.newAmount = '';
        vm.billTo = '';
        vm.billAmount = '';
        vm.account = generalLedger.getById($routeParams.accountId);

        vm.addTransaction = function() {
            if ($scope.deposit.$valid) {
                var item = {
                    description: vm.newDescription,
                    amount: vm.newAmount
                };
                vm.account.add(item);
                vm.newDescription = '';
                vm.newAmount = '';
                $scope.deposit.$setUntouched();
            }
        };

        vm.payBill = function() {
            if ($scope.billPay.$valid) {
                var item = {
                    description: vm.billTo,
                    amount: -vm.billAmount
                };
                vm.account.add(item);
                vm.billTo = '';
                vm.billAmount = '';
                $scope.billPay.$setUntouched();
            }
        };
    }]);


})();