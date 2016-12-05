import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
//import { AccountsComponent } from './accountsCmp';
import { AccountListItemComponent } from './accountListItemCmp';
import { GeneralLedgerService } from './general-ledger.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
   // AccountsComponent
   AccountListItemComponent
  ],
  providers: [
    GeneralLedgerService,
  ],
  entryComponents: [
    AccountListItemComponent
  ]
})
export class AppModule {
    ngDoBootstrap() {}
}