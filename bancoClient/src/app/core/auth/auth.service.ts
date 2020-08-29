import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const URL_API = 'http://localhost:8080';

@Injectable
(
    {
        providedIn: 'root'
    }
)
export class AuthService 
{
    constructor
    (
        private http: HttpClient,
        private userService: UserService

    ){}

    autenthicate(email: string, password: string)
    {
        return this.http.post
        (
            'http://localhost:8080/auth'
            , {email, password}
            , {observe: 'response'}
        )        
        .pipe
        (
            tap
            (
                res => {
                    let authToken = res.headers.get("Authorization");
                    this.userService.setTokenLocalStorage(authToken);
                }
            )
        );        
    }
}
