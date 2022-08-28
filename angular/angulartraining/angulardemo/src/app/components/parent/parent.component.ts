import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //msgFromParent="hi my child"
  msgFromParent:string=" "
  msgFromChild:string=" "
  constructor() { }

  ngOnInit(): void {
  }

  postMessage(msg:string):void{
    this.msgFromParent = msg
  }

  receiveFromChild($event:string){
    this.msgFromChild=$event

  }

}
