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
//# sourceMappingURL=generalLedgerSvc.js.map