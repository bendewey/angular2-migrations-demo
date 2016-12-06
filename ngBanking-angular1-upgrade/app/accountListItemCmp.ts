declare var angular: angular.IAngularStatic;

import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { Account } from './account';

@Component({
	moduleId: module.id,
	selector: 'account-list-item',
	templateUrl: '/app/accountListItem.html'
})
export class AccountListItemComponent {
	@Input() account: Account;
}

angular.module('ngBanking')
	//.component(
	.directive(
	'accountListItem',
	downgradeComponent({ component: AccountListItemComponent, inputs: ['account'] }) as angular.IDirectiveFactory
	);