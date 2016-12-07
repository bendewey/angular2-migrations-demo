(function () {
    'use strict';
    var AppComponent = (function () {
        function AppComponent($location) {
            this.$location = $location;
        }
        AppComponent.prototype.getActiveClass = function (path) {
            return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
        };
        ;
        AppComponent.$inject = ['$location'];
        return AppComponent;
    }());
    angular.module('ngBanking').component('bankingApp', {
        templateUrl: '/app/app.html',
        controller: AppComponent,
        controllerAs: 'lvm'
    });
})();
//# sourceMappingURL=appCmp.js.map