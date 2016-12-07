(function(undefined) {
    var app = angular.module('ngBanking');

app.controller('accountsCtrl', ['GeneralLedger', function(generalLedger) {
	
    var vm = this;
	
	vm.accounts = generalLedger.accounts;
  }]);

})();