(function () {
	'use strict';

	angular.module('ngBanking').directive('depositForm', directive);

	function directive() {
		var dir = {
			templateUrl: '/app/depositForm.html',
			controller: controller,
			controllerAs: 'vm',
			scope: {
				onDeposit: '&'
			}
		};

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
					$scope.onDeposit({ transaction: item });
					vm.newDescription = '';
					vm.newAmount = '';
					$scope.deposit.$setUntouched();
				}
			}
		}

		return dir;
	}

})();