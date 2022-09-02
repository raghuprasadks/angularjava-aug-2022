import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycleparent',
  templateUrl: './lifecycleparent.component.html',
  styleUrls: ['./lifecycleparent.component.css']
})
export class LifecycleparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly title = 'angular-lifecycle';
  showLifeCycleDemo = false;
  count = 0;

  flipShowLifeCycleState(): void {
    this.showLifeCycleDemo = !this.showLifeCycleDemo;
  }

  incrementCount(): void {
    this.count++;
  }

}
