import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mw-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent {

@Input() text= '';
  
constructor() { }



}
