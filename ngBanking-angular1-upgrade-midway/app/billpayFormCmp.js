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
                vm.onPaybill(item);
                vm.billTo = '';
                vm.billAmount = '';
                $scope.billPay.$setUntouched();
            }
        };
    }
    angular.module('ngBanking').component('billpayForm', {
        template: "\n\t\t<form name=\"billPay\" class=\"form-inline\" novalidate>\n    <div>\n        <div ng-if=\"billPay.billToCompany.$error.required && billPay.billToCompany.$touched\" class=\"alert alert-danger\">Bill To is required.</div>\n        <div ng-if=\"billPay.billToAmount.$error.required && billPay.billToAmount.$touched\" class=\"alert alert-danger\">Amount is required.</div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"billToCompany\">Bill To</label>\n        <input type=\"text\" class=\"form-control\" name=\"billToCompany\" placeholder=\"Bill To\" ng-model=\"vm.billTo\" ng-required=\"true\">\n    </div>\n    <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"billToAmount\">Amount (in dollars)</label>\n        <div class=\"input-group\">\n            <div class=\"input-group-addon\">$</div>\n            <input type=\"text\" class=\"form-control\" name=\"billToAmount\" placeholder=\"Amount\" ng-model=\"vm.billAmount\" ng-required=\"true\">\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.payBill();$event.preventDefault();\">Pay Bill</button>\n</form>",
        controller: controller,
        controllerAs: 'vm',
        bindings: {
            onPaybill: '&'
        }
    });
})();
//# sourceMappingURL=billpayFormCmp.js.map