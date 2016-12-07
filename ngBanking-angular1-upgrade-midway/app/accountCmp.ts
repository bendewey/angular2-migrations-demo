declare var angular: angular.IAngularStatic;

import { Component, Inject } from '@angular/core'
import { GeneralLedgerService } from './general-ledger.service';
import { Account } from './account';

import { downgradeComponent } from '@angular/upgrade/static';

@Component({
	moduleId: module.id,
	selector: 'account-view',
	templateUrl: '/app/account.html'
})
export class AccountComponent {
	account: Account;

	constructor( @Inject('$routeParams') $routeParams: any, generalLedger: GeneralLedgerService) {
		this.account = generalLedger.getById($routeParams.accountId);
	}

	addTransaction(transaction) {
		this.account.add(transaction);
	}
}

angular.module('ngBanking')
	//.component(
	.directive(
	'accountView',
	downgradeComponent({ component: AccountComponent }) as angular.IDirectiveFactory
	);