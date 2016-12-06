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
var general_ledger_service_1 = require('./general-ledger.service');
var static_1 = require('@angular/upgrade/static');
var AccountsComponent = (function () {
    function AccountsComponent(generalLedger) {
        this.accounts = generalLedger.accounts;
    }
    AccountsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'accounts-view',
            templateUrl: '/app/accounts.html'
        }), 
        __metadata('design:paramtypes', [general_ledger_service_1.GeneralLedgerService])
    ], AccountsComponent);
    return AccountsComponent;
}());
exports.AccountsComponent = AccountsComponent;
angular.module('ngBanking')
    .directive('accountsView', static_1.downgradeComponent({ component: AccountsComponent }));
//# sourceMappingURL=accountsCmp.js.map