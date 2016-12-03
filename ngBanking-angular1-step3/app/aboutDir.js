(function () {
	'use strict';

	angular.module('ngBanking').directive('aboutView', directive);


	function directive() {
		var dir = {
			restrict: 'E',
			templateUrl: '/app/about.html'
		};
        return dir;
	}
})();