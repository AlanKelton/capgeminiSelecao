import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Deposit } from './deposit';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit 
{
    depositForm: FormGroup;
    min: number = 5;
    dep:Deposit;

    constructor
    (
        private fb: FormBuilder,
        private accService: AccountService,
        private router: Router

    ) { }

    ngOnInit() 
    {
        this.depositForm = this.fb.group
        (
            {
                amount: ['', [Validators.required, Validators.min(this.min)]]               
            }
        ); 
    }
  

    deposit()
    {
        const deposit = this.depositForm.getRawValue() as Deposit;
       // this.dep.amount = this.depositForm.get('amount').value;
       this.accService.deposit(1, deposit) 
       .subscribe
       (
            res => 
            {
                this.router.navigate(['balance'])
            }
            , err => 
            {
                console.log(err);
            }
            );
            /*
         */
    }
}
