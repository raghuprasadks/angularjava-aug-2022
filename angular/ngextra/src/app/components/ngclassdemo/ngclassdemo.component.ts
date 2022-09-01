import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassdemo',
  templateUrl: './ngclassdemo.component.html',
  styleUrls: ['./ngclassdemo.component.css']
})
export class NgclassdemoComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getClass(country:string):string {
    console.log('getClass',country)
    let cssClass='text-success'
    switch (country) {
      case 'UK':
        cssClass= 'text-success';
        break;
        //return ccolor
      case 'USA':
        cssClass= 'text-primary';
        //return ccolor 
        break;       
      case 'HK':
        cssClass= 'text-danger';
       // return ccolor
       break;
    }
    return cssClass
  }

}
