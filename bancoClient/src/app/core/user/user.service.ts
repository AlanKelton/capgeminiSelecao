import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

import { User } from './user';

@Injectable
(
    {
        providedIn: 'root'
    }
)

export class UserService 
{
    private userSubject = new BehaviorSubject<User>(null);
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.tokenService.hasToken());

    get isLoggedIn() 
    {
        return this.loggedIn.asObservable();
    }

    constructor(private tokenService: TokenService) 
    { 
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setTokenLocalStorage(token: string)
    {
        this.tokenService.setTokenLocalStorage(token);
        this.decodeAndNotify();
        this.loggedIn.next(true);
    }

    getUser()
    {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify()
    {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userSubject.next(user);
    }

    logout()
    {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        this.loggedIn.next(false);
    }

    isLogged()
    {
        return this.tokenService.hasToken();
    }
}
