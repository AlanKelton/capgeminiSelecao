import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Withdraw } from './withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

    withdrawForm: FormGroup;
    min: number = 5;
    error:boolean = false;

    constructor
    (
        private fb: FormBuilder,
        private accService: AccountService,
        private router: Router

    ) { }

    ngOnInit() 
    {
        this.withdrawForm = this.fb.group
        (
            {
                amount: ['', [Validators.required, Validators.min(this.min)]]               
            }
        ); 
    }
    withdraw()
    {
        const withdraw = this.withdrawForm.getRawValue() as Withdraw;

        this.accService.withdraw(1, withdraw) 
        .subscribe
        (
             res => 
             {
                this.router.navigate(['balance'])
             }
             , err => 
             {
                this.error=true;
                 console.log(err);
             }
         );
    }
}
