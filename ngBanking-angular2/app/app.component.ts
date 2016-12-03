import { Component } from '@angular/core';
import { GeneralLedgerService } from './general-ledger.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <div class="header">
      <div class="navbar navbar-inverse" role="navigation">
        <div class="container">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" routerLink="/accounts">Accounts</a>
          </div>

          <div class="collapse navbar-collapse" id="js-navbar-collapse">

            <ul class="nav navbar-nav">
              <li routerLinkActive="active"><a routerLink="/accounts">Accounts</a></li>
			  <li routerLinkActive="active"><a routerLink="/about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
        <router-outlet></router-outlet>
    </div>

    <div class="footer">
      <div class="container">
        <p>https://github.com/bendewey/angular2-migrations-demo</p>
      </div>
    </div>
  `
})
export class AppComponent {
    
    constructor(generalLedger: GeneralLedgerService) {
      generalLedger.loadAccounts();
      if (generalLedger.accounts.length === 0) {
        generalLedger.add('acct1', 'Checking Account');
        generalLedger.add('acct2', 'Savings Account');
      }    
    }
}



