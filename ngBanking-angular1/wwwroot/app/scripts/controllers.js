(function(undefined) {
    var app = angular.module('ngBanking');

app.controller('accountsCtrl', ['$scope', 'GeneralLedger', function($scope, generalLedger) {
	
    var vm = this;
	
	vm.accounts = generalLedger.accounts;
	/*
	vm.newDescription = '';
	vm.newAmount = '';
	vm.billTo = '';
	vm.billAmount = '';
    vm.ledger = generalLedger.ledger;
    
	vm.balance = function() {
	    return generalLedger.balance;
	};
	
	vm.addTransaction = function() {
	    if ($scope.deposit.$valid) {
	        var item = {
	            description: vm.newDescription,
	            amount: vm.newAmount
	        };
	        generalLedger.add(item);
	        vm.newDescription = '';
	        vm.newAmount = '';
	        $scope.deposit.$setUntouched();
	    }
	};
	
	vm.payBill = function() {
        if ($scope.billPay.$valid) {
            var item = {
                description: vm.billTo,
                amount: -vm.billAmount
            };
            generalLedger.add(item);
            vm.billTo = '';
            vm.billAmount = '';
            $scope.billPay.$setUntouched();
        }
	};
	*/
  }]);

app.controller('accountCtrl', ['$scope', '$routeParams', 'GeneralLedger', function($scope, $routeParams, generalLedger) {
	
    var vm = this;
	
	vm.newDescription = '';
	vm.newAmount = '';
	vm.billTo = '';
	vm.billAmount = '';
	vm.account = generalLedger.getById($routeParams.accountId);
    vm.ledger = vm.account.ledger;
    
	vm.balance = function() {
	    return vm.account.balance;
	};
	
	vm.addTransaction = function() {
	    if ($scope.deposit.$valid) {
	        var item = {
	            description: vm.newDescription,
	            amount: vm.newAmount
	        };
	        vm.account.add(item);
	        vm.newDescription = '';
	        vm.newAmount = '';
	        $scope.deposit.$setUntouched();
	    }
	};
	
	vm.payBill = function() {
        if ($scope.billPay.$valid) {
            var item = {
                description: vm.billTo,
                amount: -vm.billAmount
            };
            vm.account.add(item);
            vm.billTo = '';
            vm.billAmount = '';
            $scope.billPay.$setUntouched();
        }
	};
  }]);


  app.controller('layoutCtrl', ['$scope', '$location', function($scope, $location) {
	
    var vm = this;
	
	vm.getActiveClass = function (path) {
		return ($location.path().substr(0, path.length) === path) ? 'active' : '';
	};
	
  }]);

})();
