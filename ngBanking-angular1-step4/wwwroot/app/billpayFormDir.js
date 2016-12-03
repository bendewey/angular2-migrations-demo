(function () {
	'use strict';

	controller.$inject = ['$scope'];
	function controller($scope) {
		var vm = this;

		vm.newDescription = '';
		vm.newAmount = '';

		vm.payBill = function () {
			if ($scope.billPay.$valid) {
				var item = {
					description: vm.billTo,
					amount: -vm.billAmount
				};
				vm.onPaybill({ transaction: item });
				vm.billTo = '';
				vm.billAmount = '';
				$scope.billPay.$setUntouched();
			}
		}
	}

	angular.module('ngBanking').component('billpayForm', {
		templateUrl: '/app/billpayFormDir.html',
		controller: controller,
		controllerAs: 'vm',
		bindings: {
			onPaybill: '&'
		}
	});

})();