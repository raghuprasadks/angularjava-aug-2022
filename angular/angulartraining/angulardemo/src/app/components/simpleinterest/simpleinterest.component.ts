import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent implements OnInit {

  principal:number=0
  roi:number=0
  time:number=0
  si:number=0
  h:number=100
  w:number=200
  t:string="testing"
  sty:string = "color:red"
  constructor() { }

  ngOnInit(): void {
  }

  calculateSI():void{
    this.si = (this.principal*this.roi*this.time)/100
  }

}
