import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule
(
    {       
        imports: 
        [
            CommonModule,
            BrowserAnimationsModule,
            RouterModule,
            SharedModule
        ],
        providers:
        [
            {
                provide: HTTP_INTERCEPTORS,
                useClass:RequestInterceptor,
                multi:true
            }
        ]   
    }
)
export class CoreModule { }
