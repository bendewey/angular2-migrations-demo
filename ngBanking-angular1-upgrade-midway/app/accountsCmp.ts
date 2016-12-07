declare var angular: angular.IAngularStatic;

import { Component } from '@angular/core'
import { GeneralLedgerService } from './general-ledger.service';
import { Account } from './account';

import { downgradeComponent } from '@angular/upgrade/static';

@Component({
	moduleId: module.id,
	selector: 'accounts-view',
	templateUrl: '/app/accounts.html'
})
export class AccountsComponent
{
	accounts: Account[];

	constructor(generalLedger: GeneralLedgerService) {
		this.accounts = generalLedger.accounts;
	}
}

angular.module('ngBanking')
	//.component(
	.directive(
	'accountsView',
	downgradeComponent({ component: AccountsComponent }) as angular.IDirectiveFactory
	);
