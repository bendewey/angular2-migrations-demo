import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from './account';
import { GeneralLedgerService } from './general-ledger.service';

@Component({
  moduleId: module.id,
  selector: 'accounts-view',
  templateUrl: 'accounts.component.html'
})
export class AccountsComponent {
  
  accounts: Account[];
  constructor(private generalLedger: GeneralLedgerService) { 
      this.accounts = generalLedger.accounts; 
   }
}