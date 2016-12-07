import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AccountsComponent } from './accountsCmp';
import { AccountComponent } from './accountCmp';
import { AccountListItemComponent } from './accountListItemCmp';
import { DepositFormDirective } from './depositFormCmpUpgrade';
import { BillPayFormDirective } from './billingFormCmpUpgrade';

import { GeneralLedgerService } from './general-ledger.service';


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
   AccountsComponent,
   AccountComponent,
   AccountListItemComponent,
   DepositFormDirective,
   BillPayFormDirective
  ],
  providers: [
    GeneralLedgerService,
    {
      provide: '$routeParams',
      useFactory: routeParamsFactory,
      deps: ['$injector']
    }
  ],
  entryComponents: [
    AccountsComponent,
    AccountComponent,
    AccountListItemComponent
  ]
})
export class AppModule {
    ngDoBootstrap() {}
}
export function routeParamsFactory(i: any) {
  return i.get('$routeParams');
}