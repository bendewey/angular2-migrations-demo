(function () {
	'use strict';

	angular.module('ngBanking').directive('accountsView', directive);


	function directive() {
		var dir = {
			restrict: 'E',
			templateUrl: '/app/accounts.html',
            controller: controller,
            controllerAs: 'vm'
		};

        controller.$inject = ['GeneralLedger'];
		function controller(generalLedger) {
		    var vm = this;
	
			vm.accounts = generalLedger.accounts;
		}

        return dir;
	}
})();