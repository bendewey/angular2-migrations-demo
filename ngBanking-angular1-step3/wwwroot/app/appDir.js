(function () {
	'use strict';

	angular.module('ngBanking').directive('bankingApp', directive);


	function directive() {
		var dir = {
			restrict: 'E',
			templateUrl: '/app/app.html',
            controller: controller,
            controllerAs: 'lvm'
		};

        controller.$inject = ['$location'];
		function controller($location) {
		    var vm = this;

            vm.getActiveClass = function (path) {
                return ($location.path().substr(0, path.length) === path) ? 'active' : '';
            };
		}

        return dir;
	}
})();