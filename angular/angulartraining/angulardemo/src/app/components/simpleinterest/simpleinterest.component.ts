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
  constructor() { }

  ngOnInit(): void {
  }

  calculateSI():void{
    this.si = (this.principal*this.roi*this.time)/100
  }

}
