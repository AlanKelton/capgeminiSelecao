import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './account.component';
import { HttpClientModule } from '@angular/common/http';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule
(
    {
        declarations: [ AccountComponent, DepositComponent, WithdrawComponent, BalanceComponent]
        ,imports: 
        [
            HttpClientModule,
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            RouterModule,
            SharedModule
        ]
    }
)
export class AccountModule {}