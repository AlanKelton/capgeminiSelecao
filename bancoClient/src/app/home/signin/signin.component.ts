import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'bc-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    
    loginForm: FormGroup;
    error: boolean = false;
    @ViewChild('inputPassword', {static: false}) inputPassword: ElementRef<HTMLInputElement>;
    @ViewChild('inputEmail', {static: false}) inputEmail: ElementRef<HTMLInputElement>;
    
    constructor
    (
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router

    ) { }
        
    ngOnInit() 
    {
        this.loginForm = this.fb.group
        (
            {
                userName: ['', [Validators.required, Validators.email]],
                password: ['', Validators.required]
            }
        );            
    }       

    login() 
    {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.error = false;
        
        this.authService
            .autenthicate(userName, password)            
            .subscribe
            (
                () => this.router.navigate(['account'])
                , err => 
                {
                    this.error = true;
                    console.log(err);
                    this.loginForm.reset();
  