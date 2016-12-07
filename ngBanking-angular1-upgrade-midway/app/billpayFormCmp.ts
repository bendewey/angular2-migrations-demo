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
		}
	}

	angular.module('ngBanking').component('billpayForm', {
		template: `
		<form name="billPay" class="form-inline" novalidate>
    <div>
        <div ng-if="billPay.billToCompany.$error.required && billPay.billToCompany.$touched" class="alert alert-danger">Bill To is required.</div>
        <div ng-if="billPay.billToAmount.$error.required && billPay.billToAmount.$touched" class="alert alert-danger">Amount is required.</div>
    </div>
    <div class="form-group">
        <label class="sr-only" for="billToCompany">Bill To</label>
        <input type="text" class="form-control" name="billToCompany" placeholder="Bill To" ng-model="vm.billTo" ng-required="true">
    </div>
    <div class="form-group">
        <label class="sr-only" for="billToAmount">Amount (in dollars)</label>
        <div class="input-group">
            <div class="input-group-addon">$</div>
            <input type="text" class="form-control" name="billToAmount" placeholder="Amount" ng-model="vm.billAmount" ng-required="true">
        </div>
    </div>
    <button type="button" class="btn btn-primary" ng-click="vm.payBill();$event.preventDefault();">Pay Bill</button>
</form>`,
		controller: controller,
		controllerAs: 'vm',
		bindings: {
			onPaybill: '&'
		}
	});

})();