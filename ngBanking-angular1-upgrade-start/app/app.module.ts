import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [],
  providers: [],
  entryComponents: []
})
export class AppModule {
    ngDoBootstrap() {}
}