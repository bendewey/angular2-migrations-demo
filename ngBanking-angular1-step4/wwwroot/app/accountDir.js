(function () {
	'use strict';

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

	angular.module('ngBanking').component('accountView', {
		templateUrl: '/app/account.html',
		controller: controller,
		controllerAs: 'vm'
	});

})();