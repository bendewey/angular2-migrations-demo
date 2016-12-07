(function () {
    'use strict';
    controller.$inject = ['$routeParams', 'GeneralLedger'];
    function controller($routeParams, generalLedger) {
        var vm = this;
        vm.account = generalLedger.getById($routeParams.accountId);
        vm.addTransaction = function (transaction) {
            vm.account.add(transaction);
        };
    }
    angular.module('ngBanking').component('accountView', {
        templateUrl: '/app/account.html',
        controller: controller,
        controllerAs: 'vm'
    });
})();
//# sourceMappingURL=accountCmp.js.map