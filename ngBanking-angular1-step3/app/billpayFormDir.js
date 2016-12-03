(function () {
	'use strict';

	angular.module('ngBanking').directive('billpayForm', directive);

	function directive() {
		var dir = {
			templateUrl: '/app/billpayForm.html',
			controller: controller,
			controllerAs: 'vm',
			scope: {
				onPaybill: '&'
			}
		};

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
					$scope.onPaybill({ transaction: item });
					vm.billTo = '';
					vm.billAmount = '';
					$scope.billPay.$setUntouched();
				}
			}
		}

		return dir;
	}

})();