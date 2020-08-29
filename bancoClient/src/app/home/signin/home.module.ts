import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule
(
    {
        declarations: [ SigninComponent]
        ,imports: [
          CommonModule,
          ReactiveFormsModule,
          FormsModule,
          RouterModule,
          SharedModule
        ]
    }
)
export class HomeModule {}