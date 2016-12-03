(function () {
	'use strict';

	angular.module('ngBanking').directive('accountListItem', directive);

	function directive() {
		var dir = {
			templateUrl: '/app/accountListItem.html',
			scope: {
				account: '='
			}
		};

		return dir;
	}

})();