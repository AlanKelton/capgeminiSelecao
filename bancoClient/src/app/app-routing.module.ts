import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './home/signin/signin.component';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './account/deposit/deposit.component';
import { WithdrawComponent } from './account/withdraw/withdraw.component';
import { BalanceComponent } from './account/balance/balance.component';

const routes: Routes = 
[
    {
        path:'',
        component: SigninComponent
    },
    {
        path: 'account', 
        component: AccountComponent
    },
    {
        path: 'balance', 
        component: BalanceComponent
    },
    {
        path: 'deposit', 
        component: DepositComponent
    },
    {
        path: 'withdraw', 
        component: WithdrawComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
