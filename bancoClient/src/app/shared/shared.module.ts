import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmessageComponent } from './component/vmessage/vmessage.component';
import { SuccessMessageComponent } from './component/success-message/success-message.component';
import { DarkenOnHover } from './directives/darken-on-hover/darken-on-hover.directive';

import { ShowIfLoggedDirective } from './directives/show-if-logged/show-if-logged.directive';



@NgModule({
  declarations: [
      VmessageComponent,
      SuccessMessageComponent,
      DarkenOnHover,
      ShowIfLoggedDirective
  ],
  exports: [
      VmessageComponent,
      SuccessMessageComponent,
      DarkenOnHover,
      ShowIfLoggedDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
