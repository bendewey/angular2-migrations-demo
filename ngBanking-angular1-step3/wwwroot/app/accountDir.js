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

			vm.addTransaction = function (transaction) {
				vm.account.add(transaction);
			};

			vm.payBill = function (transaction) {
				vm.account.add(transaction);
			};
		}

		return dir;
	}
})();