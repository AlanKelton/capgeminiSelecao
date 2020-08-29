import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor 
{
    constructor(private tokenService:TokenService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        const headerSettings: {[name: string]: string | string[]; } = {};
        let changedRequest = req;
        for (const key of req.headers.keys()) 
        {
            headerSettings[key] = req.headers.getAll(key);
        }
        if (this.tokenService.hasToken) 
        {
            const token = this.tokenService.getToken();
            headerSettings['Authorization'] = 'Bearer ' + token;
        }
        
        headerSettings['Content-Type'] = 'application/json';
        const newHeader = new HttpHeaders(headerSettings);
     
        changedRequest = req.clone
        (
            {
                headers: newHeader
            }
        );
        return next.handle(changedRequest);
    }
    
}