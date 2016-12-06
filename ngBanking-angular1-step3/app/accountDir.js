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

			vm.account = generalLedger.getById($routeParams.accountId);

			vm.addTransaction = function (transaction) {
				vm.account.add(transaction);
			};
		}

		return dir;
	}
})();