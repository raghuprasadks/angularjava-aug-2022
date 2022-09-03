import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
logs: string[] = [];
@Input() count = 0;
childmessge:string ="hi from child"

// Invoked when Angular creates the component
constructor() {
this.log(`1 - constructor`);
}

/**
* Invoked each time a data-bound input property on the component changes.
* When this method is called you’ll get an object that has the current and previous values of the input that changed.
* This get’s called very often so avoid putting heavy logic in this method as it’ll affect your app performance.
*/
ngOnChanges(changes: SimpleChanges): void {
this.log(`2 - ngOnChanges`);
this.log(`2 - ngOnChanges - previous count: ${changes['count'].previousValue}`);
this.log(`2 - ngOnChanges - current count: ${changes['count'].currentValue}`);
}

/**
* Initializes the component and sets the input properties.
* Called once after the first ngOnChanges
*/
ngOnInit(): void {
this.log(`3 - ngOnInit`);
}

/**
* Handle changes that Angular can’t detect on its own. This is where custom change detection comes into play.
* Do not implement ngDoCheck and ngOnChanges in the same component.
* Note that a component typically should not use both DoCheck and OnChanges to respond to changes on the SAME input,
* as ngOnChanges will continue to be called when the default change detector detects changes.
* Called after ngOnChanges on every change detection run and immediately after ngOnInit on the first run. Avoid heavy logic here.
*/
ngDoCheck(): void {
this.log(`4 - ngDoCheck`);
}

/**
* Invoked after Angular performs any content projection into the component’s view.
* (Content projection is a way to import HTML content from outside the component
* and insert that content into the component's template in a designated spot.)
* This is mainly used if you’re implementing the <ng-content> HTML tags and @ContentChild component properties.
* This is called once after the first ngDoCheck
*/
ngAfterContentInit(): void {
this.log(`5 - ngAfterContentInit`);
}

/**
* Runs after Angular checks the content projected into the current component.
* This is called after ngAfterContentInit and every subsequent ngDoCheck. Avoid putting heavy logic here.
*/
ngAfterContentChecked(): void {
this.log(`6 - ngAfterContentChecked`);
}

/**
* Runs after Angular initializes the component’s views and child views.
* This is the first time you’ll have access to the @ViewChild properties on your component.
* Called once after the first ngAfterContentChecked.
*/
ngAfterViewInit(): void {
this.log(`7 - ngAfterViewInit`);
}

/**
* Runs after Angular checks the component’s views and child views.
* This is called after ngAfterViewInit and every subsequent ngAfterContentChecked. Avoid putting heavy logic here
*/
ngAfterViewChecked(): void {
this.log(`8 - ngAfterViewChecked`);
}

/**
* The cleanup hook that runs just before the component is destroyed.
* This is a great place to unsubscribe from all your observables and detach any event handles you have to avoid memory leaks.
*/
ngOnDestroy(): void {
this.log(`9 - ngOnDestroy`);
}

/**
* Custom log method to output to user's screen and console.log at the same time.
*/
log(message: string): void {
this.logs.push(message);
console.log(message);
}
}
