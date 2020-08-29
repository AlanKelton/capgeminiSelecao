import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Account } from './account';
import { Deposit } from './deposit/deposit';
import { Withdraw } from './withdraw/withdraw';

@Injectable({ providedIn: 'root' })
export class AccountService 
{
    API_URL = 'http://localhost:8080/account/';

    constructor(private http: HttpClient){}
        
    get(user_id: number)
    {
        return this.http.get<Account>(this.API_URL + 1);
    }

    balance(account_id: number)
    {
        return this.http
        .get<string>(this.API_URL + 'balance/' + account_id);
    }

    deposit(id: number, deposit: Deposit)
    {                        
        return this.http.patch(this.API_URL + 'deposit/' + id, deposit);            
    }

    withdraw(account_id: number, withdraw: Withdraw)
    {                        
        return this.http.patch(this.API_URL + 'withdraw/' + account_id, withdraw);            
    }     
}