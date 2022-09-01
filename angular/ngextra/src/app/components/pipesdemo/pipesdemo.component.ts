import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  course:string = "Angular Spring Spring Boot"
  a: number = 0.259;
  b: number = 1.3495;
  today = new Date()
  pi: number = 3.14159265359;
  constructor() { }

  ngOnInit(): void {
  }

}
