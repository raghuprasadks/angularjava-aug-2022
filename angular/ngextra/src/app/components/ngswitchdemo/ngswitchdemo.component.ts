import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  templateUrl: './ngswitchdemo.component.html',
  styleUrls: ['./ngswitchdemo.component.css']
})
export class NgswitchdemoComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
