(function () {
	'use strict';

	angular.module('ngBanking').directive('accountView', directive);


	function directive() {
		var dir = {
			restrict: 'E',
			templateUrl: '/app/account.html',
			controller: controller,
			controllerAs: 'vm'
		};

		controller.$inject = ['$scope', '$routeParams', 'GeneralLedger'];
		function controller($scope, $routeParams, generalLedger) {
			var vm = this;

			vm.newDescription = '';
			vm.newAmount = '';
			vm.billTo = '';
			vm.billAmount = '';
			vm.account = generalLedger.getById($routeParams.accountId);
			vm.ledger = vm.account.ledger;

			vm.balance = function () {
				return vm.account.balance;
			};

			vm.addTransaction = function () {
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

			vm.payBill = function () {
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
		}

		return dir;
	}
})();