(function () {
	'use strict';

	controller.$inject = ['GeneralLedger'];
	function controller(generalLedger) {
		var vm = this;

		vm.accounts = generalLedger.accounts;
	}

	angular.module('ngBanking').component('accountsView', {
		templateUrl: '/app/accounts.html',
		controller: controller,
		controllerAs: 'vm'
	});

})();