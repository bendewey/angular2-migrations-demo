(function (undefined) {
    var app = angular.module('ngBanking');

    app.controller('layoutCtrl', ['$scope', '$location', function ($scope, $location) {

        var vm = this;

        vm.getActiveClass = function (path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };

    }]);

})();