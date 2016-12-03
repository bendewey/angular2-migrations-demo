(function () {
    'use strict';
    controller.$inject = ['$scope'];
    function controller($scope) {
        var vm = this;
        vm.billTo = '';
        vm.billAmount = '';
        vm.payBill = function () {
            if ($scope.billPay.$valid) {
                var item = {
                    description: vm.billTo,
                    amount: -vm.billAmount
                };
                vm.onPaybill({ transaction: item });
                vm.billTo = '';
                vm.billAmount = '';
                $scope.billPay.$setUntouched();
            }
        };
    }
    angular.module('ngBanking').component('billpayForm', {
        templateUrl: '/app/billpayForm.html',
        controller: controller,
        controllerAs: 'vm',
        bindings: {
            onPaybill: '&'
        }
    });
})();
//# sourceMappingURL=billpayFormCmp.js.map