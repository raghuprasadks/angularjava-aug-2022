import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {
  course:string | undefined;
  duration:number=0
  ruLearning:boolean=false
  courses:string[]=[]
  random:any[] | undefined
  myTuple:[string, number, boolean] | undefined
  emp={
    code:1,
    name:"rahul",
    dept:"IT"
  }
  employees=[
    {
      code:1,
      name:"rahul",
      dept:"IT"
    },
    {
      code:2,
      name:"rajani",
      dept:"IT"
    }  

  ]
  
  constructor() {
    console.log("constructor")
    this.course="Angular"
   }

  ngOnInit(): void {
    console.log("ngOnInit")
    this.duration=4
    this.ruLearning=true
    this.courses=["HTML","CSS","Java"]
    this.random=[1,true,"test"]
    this.myTuple=["test",2,false]

  }

}
