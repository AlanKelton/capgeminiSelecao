import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mw-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css']
})
export class VmessageComponent {

@Input() text= '';

}
