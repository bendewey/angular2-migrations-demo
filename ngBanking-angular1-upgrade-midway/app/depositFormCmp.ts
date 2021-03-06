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
		}
	}

	angular.module('ngBanking').component('depositForm', {
			template: `
<form name="deposit" class="form-inline" novalidate>
    <div>
        <div ng-if="deposit.memo.$error.required && deposit.memo.$touched" class="alert alert-danger">Memo is required.</div>
        <div ng-if="deposit.amount.$error.required && deposit.amount.$touched" class="alert alert-danger">Amount is required.</div>
    </div>
    <div class="form-group">
        <label class="sr-only" for="memo">Memo</label>
        <input type="text" class="form-control" name="memo" placeholder="Memo" ng-model="vm.newDescription" ng-required="true">
    </div>
    <div class="form-group">
        <label class="sr-only" for="amount">Amount (in dollars)</label>
        <div class="input-group">
            <div class="input-group-addon">$</div>
            <input type="text" class="form-control" id="amount" name="amount" placeholder="Amount" ng-model="vm.newAmount" ng-required="true">
        </div>
    </div>
    <button type="button" class="btn btn-primary" ng-click="vm.deposit();$event.preventDefault();">Deposit</button>
</form>
			`,
			controller: controller,
			controllerAs: 'vm',
			bindings: {
				onDeposit: '&'
			}});

})();