import { Component, OnInit, AfterViewInit, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from './account.service';
import { Account } from './account';
import { UserService } from '../core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit 
{
    depositForm: FormGroup;
    varEr: ElementRef;
    account_number: string;    
    balance: number;   
    error: boolean = false; 
    
    user_id: number;
    
    constructor
    (
        private fb: FormBuilder,
        private accService: AccountService,
        private userService: UserService,
        private router: Router
    ) 
    {
        this.userService.getUser().subscribe
        (
            user => this.user_id = user.id
        )
    }
        
    ngOnInit(): void 
    {
       // retrive account data by account service     
       this.accService
       .get(this.user_id)
       .subscribe
       (
            res => 
            {
                this.account_number = res.number,
                this.balance = res.balance
            }
            , err => 
            {
                this.error = true;
                console.log(err);
            }
        );
    }   
    
    getBalance()
    {
        this.router.navigate(['balance'])
    }
    

    gotoLoginPage()
    {
        this.router.navigate([''])
    }

    deposit()
    {
        this.router.navigate(['deposit'])
    }
    
    withdraw()
    {
        this.router.navigate(['withdraw'])
    }
}
