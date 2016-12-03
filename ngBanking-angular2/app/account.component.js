"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var general_ledger_service_1 = require('./general-ledger.service');
var AccountComponent = (function () {
    //depositForm: FormGroup;
    //newDescriptionControl: Control;
    function AccountComponent(generalLedger, _route) {
        this.generalLedger = generalLedger;
        this._route = _route;
        this.newDescription = '';
        this.newAmount = '';
        this.billTo = '';
        this.billAmount = '';
        var accountId;
        this._route.params.forEach(function (params) {
            accountId = params['accountId'];
        });
        this.account = generalLedger.getById(accountId);
        this.ledger = this.account.ledger;
        this.depositFormActive = true;
        this.billFormActive = true;
        //this.newDescriptionControl = new Control('', Validators.required);
    }
    AccountComponent.prototype.balance = function () {
        return this.account.balance;
    };
    AccountComponent.prototype.addTransaction = function () {
        var _this = this;
        //if ($scope.deposit.$valid) {
        this.depositFormActive = false;
        var item = {
            description: this.newDescription,
            amount: +this.newAmount
        };
        this.account.add(item);
        this.newDescription = '';
        this.newAmount = '';
        setTimeout(function () { return _this.depositFormActive = true; }, 0);
        //  $scope.deposit.$setUntouched();
        //}
    };
    AccountComponent.prototype.payBill = function () {
        var _this = this;
        // if ($scope.billPay.$valid) {
        this.billFormActive = false;
        var item = {
            description: this.billTo,
            amount: -this.billAmount
        };
        this.account.add(item);
        this.billTo = '';
        this.billAmount = '';
        setTimeout(function () { return _this.billFormActive = true; }, 0);
        //   $scope.billPay.$setUntouched();
        // }
    };
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-view',
            templateUrl: 'account.component.html'
        }), 
        __metadata('design:paramtypes', [general_ledger_service_1.GeneralLedgerService, router_1.ActivatedRoute])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=account.component.js.map