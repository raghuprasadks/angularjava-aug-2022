import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string="";
  email:string="";
  mobile:number=0;
  location:string="";
  constructor() { }

  ngOnInit(): void {
    this.name = "Ranga";
    this.email="ranga@gmail.com";
    this.mobile=9000000;
    this.location="Bengaluru"
  }

}
