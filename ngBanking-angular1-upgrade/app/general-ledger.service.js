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
var static_1 = require('@angular/upgrade/static');
var core_1 = require('@angular/core');
var account_1 = require('./account');
var GeneralLedgerService = (function () {
    function GeneralLedgerService() {
    }
    Object.defineProperty(GeneralLedgerService.prototype, "balance", {
        get: function () {
            var total = 0;
            this.accounts.forEach(function (account) {
                total += +account.balance;
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    GeneralLedgerService.prototype.loadAccounts = function () {
        var accountsJson = sessionStorage.getItem('accounts');
        var accountIds = accountsJson ? JSON.parse(accountsJson) : [];
        this.accounts = accountIds.map(function (acctId) {
            var accountJson = sessionStorage.getItem(acctId);
            var account = accountJson ? JSON.parse(accountJson) : {};
            if (account.id) {
                return new account_1.Account(account.id, account.name, account.ledger);
            }
            return null;
        });
    };
    GeneralLedgerService.prototype.getById = function (id) {
        var acct;
        this.accounts.forEach(function (a) {
            if (a.id === id) {
                acct = a;
            }
        });
        return acct;
    };
    GeneralLedgerService.prototype.add = function (id, name) {
        var acct = new account_1.Account(id, name);
        this.accounts.push(acct);
        var jsonAcctIds = JSON.stringify(this.accounts.map(function (a) {
            return a.id;
        }));
        sessionStorage.setItem('accounts', jsonAcctIds);
        return acct;
    };
    GeneralLedgerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GeneralLedgerService);
    return GeneralLedgerService;
}());
exports.GeneralLedgerService = GeneralLedgerService;
angular.module('ngBanking')
    .service('GeneralLedger', static_1.downgradeInjectable(GeneralLedgerService));
//# sourceMappingURL=general-ledger.service.js.map