import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'accounts/:accountId',
    component: AccountComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AboutComponent, AccountsComponent, AccountComponent];
