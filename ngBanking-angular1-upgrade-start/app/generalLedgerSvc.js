(function () {
    var app = angular.module('ngBanking');
    function GeneralLedger() {
        this.accounts = [];
    }
    GeneralLedger.prototype = {
        get balance() {
            var total = 0;
            this.accounts.forEach(function (account) {
                total += +account.balance;
            });
            return total;
        },
        loadAccounts: function () {
            var accountsJson = sessionStorage.getItem('accounts');
            var accountIds = accountsJson ? JSON.parse(accountsJson) : [];
            this.accounts = accountIds.map(function (acctId) {
                var accountJson = sessionStorage.getItem(acctId);
                var account = accountJson ? JSON.parse(accountJson) : {};
                if (account.id) {
                    return new Account(account.id, account.name, account.ledger);
                }
                return null;
            });
        },
        getById: function (id) {
            var acct;
            this.accounts.forEach(function (a) {
                if (a.id === id) {
                    acct = a;
                }
            });
            return acct;
        },
        add: function (id, name) {
            var acct = new Account(id, name);
            this.accounts.push(acct);
            var jsonAcctIds = JSON.stringify(this.accounts.map(function (a) {
                return a.id;
            }));
            sessionStorage.setItem('accounts', jsonAcctIds);
            return acct;
        }
    };
    function Account(id, name, ledger) {
        this.id = id;
        this.name = name;
        this.ledger = ledger || [];
        sessionStorage.setItem(this.id, JSON.stringify(this));
    }
    Account.prototype = {
        get balance() {
            var bal = 0;
            this.ledger.forEach(function (transaction) {
                bal += +transaction.amount;
            });
            return bal;
        },
        add: function (transaction) {
            this.ledger.push(transaction);
            sessionStorage.setItem(this.id, JSON.stringify(this));
        }
    };
    app.service('GeneralLedger', GeneralLedger);
})();
/*
declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

import { Account } from './account';

@Injectable()
export class GeneralLedgerService {
    accounts: Account[];
    constructor() { }

    get balance(): number {
        var total: number = 0;
        this.accounts.forEach(function (account) {
            total += +account.balance;
        });
        return total;
    }

    loadAccounts() {
        var accountsJson = sessionStorage.getItem('accounts');
        var accountIds = accountsJson ? JSON.parse(accountsJson) : [];
        this.accounts = accountIds.map(function(acctId: string) {
            var accountJson = sessionStorage.getItem(acctId);
            var account = accountJson ? JSON.parse(accountJson) : {};
            if (account.id) {
                return new Account(account.id, account.name, account.ledger);
            }
            return null;
            });
    }
    
    getById(id: string) {
        var acct: Account;
        this.accounts.forEach(function(a) {
            if (a.id === id) {
                acct = a;
            }
        });
        return acct;
    }

    add(id: string, name: string) {
        var acct = new Account(id, name);
        this.accounts.push(acct);
        var jsonAcctIds = JSON.stringify(this.accounts.map(function(a) {
            return a.id;
        }));
        sessionStorage.setItem('accounts', jsonAcctIds);
        return acct;
    }
}

angular.module('ngBanking')
  .service('GeneralLedger', downgradeInjectable(GeneralLedgerService));

  */ 
//# sourceMappingURL=generalLedgerSvc.js.map