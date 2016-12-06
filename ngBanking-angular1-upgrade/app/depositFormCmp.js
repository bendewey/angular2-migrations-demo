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
                vm.onDeposit(item);
                vm.newDescription = '';
                vm.newAmount = '';
                $scope.deposit.$setUntouched();
            }
        };
    }
    angular.module('ngBanking').component('depositForm', {
        template: "\n<form name=\"deposit\" class=\"form-inline\" novalidate>\n    <div>\n        <div ng-if=\"deposit.memo.$error.required && deposit.memo.$touched\" class=\"alert alert-danger\">Memo is required.</div>\n        <div ng-if=\"deposit.amount.$error.required && deposit.amount.$touched\" class=\"alert alert-danger\">Amount is required.</div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"memo\">Memo</label>\n        <input type=\"text\" class=\"form-control\" name=\"memo\" placeholder=\"Memo\" ng-model=\"vm.newDescription\" ng-required=\"true\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"amount\">Amount (in dollars)</label>\n        <div class=\"input-group\">\n            <div class=\"input-group-addon\">$</div>\n            <input type=\"text\" class=\"form-control\" id=\"amount\" name=\"amount\" placeholder=\"Amount\" ng-model=\"vm.newAmount\" ng-required=\"true\">\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.deposit();$event.preventDefault();\">Deposit</button>\n</form>\n\t\t\t",
        controller: controller,
        controllerAs: 'vm',
        bindings: {
            onDeposit: '&'
        } });
})();
//# sourceMappingURL=depositFormCmp.js.map