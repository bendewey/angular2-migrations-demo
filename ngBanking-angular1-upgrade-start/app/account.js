"use strict";
var Account = (function () {
    function Account(id, name, ledger) {
        this.id = id;
        this.name = name;
        this.ledger = ledger || [];
        sessionStorage.setItem(this.id, JSON.stringify(this));
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            var bal = 0;
            this.ledger.forEach(function (transaction) {
                bal += +transaction.amount;
            });
            return bal;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.add = function (transaction) {
        this.ledger.push(transaction);
        sessionStorage.setItem(this.id, JSON.stringify(this));
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map