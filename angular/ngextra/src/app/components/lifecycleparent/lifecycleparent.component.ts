import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LifecyclechildComponent } from '../lifecyclechild/lifecyclechild.component';

@Component({
  selector: 'app-lifecycleparent',
  templateUrl: './lifecycleparent.component.html',
  styleUrls: ['./lifecycleparent.component.css']
})
export class LifecycleparentComponent implements OnInit,AfterViewInit {

  @ViewChild(LifecyclechildComponent) child!: LifecyclechildComponent;
  constructor() { }
  ngAfterViewInit(): void {
    console.log("LifecycleparentComponent:ngAfterViewInit::" +this.child)
    //throw new Error('Method not implemented.');
    //this.messageFromChild =this.child.childmessge;

  }

  ngOnInit(): void {
  }

  readonly title = 'angular-lifecycle';
  showLifeCycleDemo = false;
  count = 0;

  messageFromChild:string = ""

  flipShowLifeCycleState(): void {
    this.showLifeCycleDemo = !this.showLifeCycleDemo;
  }

  incrementCount(): void {
    this.count++;
  }

}
