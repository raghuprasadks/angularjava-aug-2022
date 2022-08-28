import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage:string=''

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMsgToParent(msgToParent:string){
    this.messageEvent.emit(msgToParent)
  }

}
function Ouptput() {
  throw new Error('Function not implemented.');
}

