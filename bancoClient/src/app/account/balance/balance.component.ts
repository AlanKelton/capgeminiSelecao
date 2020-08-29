import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit 
{

    balance: string;
    constructor
    (
        private accService: AccountService

    ) { }

    ngOnInit() 
    {
        // retrive balance from user by account service     
        this.accService
        .balance(1)
        .subscribe
        (
            res => 
            {
                this.balance = res
            }
            , err => 
            {
                console.log(err);
            }
        );
    }
}

