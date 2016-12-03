(function(undefined) {
    var app = angular.module('ngBanking');

app.controller('accountsCtrl', ['$scope', 'GeneralLedger', function($scope, generalLedger) {
	
    var vm = this;
	
	vm.accounts = generalLedger.accounts;
  }]);

})();