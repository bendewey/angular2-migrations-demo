import { Transaction } from './transaction'; 

export class Account {
    id: string;
    name: string;
    ledger: Transaction[]

    constructor(id: string, name: string, ledger?: Transaction[]) {
        this.id = id;
        this.name = name;
        this.ledger = ledger || [];
        sessionStorage.setItem(this.id, JSON.stringify(this));
    } 
    
    get balance() {
        var bal = 0;
        this.ledger.forEach(function (transaction: Transaction) {
            bal += +transaction.amount;
        });
        return bal;
    }

    add(transaction: Transaction) {
        this.ledger.push(transaction);
        sessionStorage.setItem(this.id, JSON.stringify(this));
    }
}