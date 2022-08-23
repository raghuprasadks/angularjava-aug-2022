import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[]
  show:boolean=false;
  constructor() { }

  ngOnInit(): void {

    this.users=[
      {
        name:"suresh",
        email:"suresh@gmail.com",
        mobile:999999,
        location:"Mysore"
      },
      {
        name:"srinidhi",
        email:"srinidhi@gmail.com",
        mobile:888888,
        location:"Pune"
      },
      {
        name:"Gaurav",
        email:"gaurav@gmail.com",
        mobile:77777,
        location:"Chenni"
      }
  ]
  }

}
