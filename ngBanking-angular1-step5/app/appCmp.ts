(function () {
	'use strict';

	controller.$inject = ['$location'];
	function controller($location) {
		var vm = this;

		vm.getActiveClass = function (path) {
			return ($location.path().substr(0, path.length) === path) ? 'active' : '';
		};
	}

	angular.module('ngBanking').component('bankingApp', {
		templateUrl: '/app/app.html',
		controller: controller,
		controllerAs: 'lvm'
	});

})();