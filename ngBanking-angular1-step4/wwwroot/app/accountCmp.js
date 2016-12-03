(function () {
	'use strict';

	controller.$inject = ['$routeParams', 'GeneralLedger'];
	function controller($routeParams, generalLedger) {
		var vm = this;

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

	angular.module('ngBanking').component('accountView', {
		templateUrl: '/app/account.html',
		controller: controller,
		controllerAs: 'vm'
	});

})();