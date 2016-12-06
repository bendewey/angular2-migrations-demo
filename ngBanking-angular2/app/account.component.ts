import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { FormBuilder, Control, Validators, FormGroup } from '@angular/forms';


import { Transaction } from './transaction';
import { Account } from './account';
import { GeneralLedgerService } from './general-ledger.service';


@Component({
    moduleId: module.id,
    selector: 'account-view',
    templateUrl: 'account.component.html'
})
export class AccountComponent {

    depositFormActive: boolean;
    billFormActive: boolean;

    newDescription: string = '';
    newAmount: string = '';
    billTo: string = '';
    billAmount: string = '';

    account: Account;
    ledger: any[];

    //depositForm: FormGroup;
    //newDescriptionControl: Control;

    constructor(private generalLedger: GeneralLedgerService, private _route: ActivatedRoute) {
        let accountId: string;
        this._route.params.forEach((params: Params) => {
            accountId = params['accountId'];
        });
        this.account = generalLedger.getById(accountId);
        this.ledger = this.account.ledger;
        this.depositFormActive = true;
        this.billFormActive = true;

        //this.newDescriptionControl = new Control('', Validators.required);

    }

    balance() {
        return this.account.balance;
    }

    addTransaction() {
        this.depositFormActive = false;
        var item: Transaction = {
            description: this.newDescription,
            amount: +this.newAmount
        };
        this.account.add(item);
        this.newDescription = '';
        this.newAmount = '';
        setTimeout(() => this.depositFormActive = true, 0);
    }

    payBill() {
        this.billFormActive = false;
        var item: Transaction = {
            description: this.billTo,
            amount: -this.billAmount
        };
        this.account.add(item);
        this.billTo = '';
        this.billAmount = '';
        setTimeout(() => this.billFormActive = true, 0);
    }
}
