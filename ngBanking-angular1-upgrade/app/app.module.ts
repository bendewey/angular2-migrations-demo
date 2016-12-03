import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { GeneralLedgerService } from './general-ledger.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    GeneralLedgerService,
  ]
})
export class AppModule {
    ngDoBootstrap() {}
}