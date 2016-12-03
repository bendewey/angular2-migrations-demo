(function () {
    'use strict';
    controller.$inject = ['$scope'];
    function controller($scope) {
        var vm = this;
        vm.newDescription = '';
        vm.newAmount = '';
        vm.deposit = function () {
            if ($scope.deposit.$valid) {
                var item = {
                    description: vm.newDescription,
                    amount: vm.newAmount
                };
                vm.onDeposit({ transaction: item });
                vm.newDescription = '';
                vm.newAmount = '';
                $scope.deposit.$setUntouched();
            }
        };
    }
    angular.module('ngBanking').component('depositForm', {
        templateUrl: '/app/depositForm.html',
        controller: controller,
        controllerAs: 'vm',
        bindings: {
            onDeposit: '&'
        }
    });
})();
//# sourceMappingURL=depositFormCmp.js.map