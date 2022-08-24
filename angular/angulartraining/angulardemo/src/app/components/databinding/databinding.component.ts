import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  name:string="mahesh"
  email:string="mahesh@gmail.com"
  mobile:number=999999999
  isInActive:boolean = false
  location:string="Bengaluru"
  constructor() { }

  ngOnInit(): void {
  }

  saveData():void{
    console.log("Button is clicked")
    console.log("my current location ",this.location)
  }

}
