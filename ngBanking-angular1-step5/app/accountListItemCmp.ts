(function () {
	'use strict';

	angular.module('ngBanking').component('accountListItem', {
		templateUrl: '/app/accountListItem.html',
		bindings: {
			account: '<'
		}
	});

})();