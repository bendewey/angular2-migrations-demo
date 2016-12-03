(function () {
	'use strict';

	class AppComponent {
		static $inject = ['$location'];
		constructor(private $location) {
		}

		getActiveClass(path) {
			return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
		};
	}

	angular.module('ngBanking').component('bankingApp', {
		templateUrl: '/app/app.html',
		controller: AppComponent,
		controllerAs: 'lvm'
	});

})();