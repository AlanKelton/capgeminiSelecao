import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/signin/home.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';

@NgModule
(
    {
        declarations: 
        [
            AppComponent
        ],
        imports: 
        [      
            ReactiveFormsModule,
            BrowserModule,
            CoreModule,
            HomeModule,    
            AccountModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    }
)
export class AppModule { }
