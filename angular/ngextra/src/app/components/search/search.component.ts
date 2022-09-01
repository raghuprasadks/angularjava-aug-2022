import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //public searchFilter: any = '';

  public query: any = '';

  Students = [{
    "id": 1,
    "name": "Nathaniel Graham",
    "email": "nathaniel.graham@example.com"
  },
  {
    "id": 2,
    "name": "Avery Adams",
    "email": "avery.adams@example.com"
  },
  {
    "id": 3,
    "name": "Mario Stevens",
    "email": "mario.stevens@example.com"
  },
  {
    "id": 4,
    "name": "Constance Beck",
    "email": "constance.beck@example.com"
  },
  {
    "id": 5,
    "name": "Jimmie Little",
    "email": "jimmie.little@example.com"
  },
  {
    "id": 6,
    "name": "Avery Matthews",
    "email": "avery.matthews@example.com"
  },
  {
    "id": 7,
    "name": "Pat Sutton",
    "email": "pat.sutton@example.com"
  },
  {
    "id": 8,
    "name": "Danny Crawford",
    "email": "danny.crawford@example.com"
  },
  {
    "id": 9,
    "name": "Pearl Mccoy",
    "email": "pearl.mccoy@example.com"
  },
  {
    "id": 10,
    "name": "Flenn Wallace",
    "email": "flenn.wallace@example.com"
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}
