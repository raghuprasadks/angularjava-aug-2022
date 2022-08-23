import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /**
  name:string="";
  email:string="";
  mobile:number=0;
  location:string="";
  */
  user:User={
    name:"",
    email:"",
    mobile:0,
    location:""
  }
  constructor() { }
  ngOnInit(): void {
    /**
    this.name = "Ranga";
    this.email="ranga@gmail.com";
    this.mobile=9000000;
    this.location="Bengaluru"
 */
    this.user={
      name:"suresh",
      email:"suresh@gmail.com",
      mobile:999999,
      location:"Mysore"
    }
  }

}
