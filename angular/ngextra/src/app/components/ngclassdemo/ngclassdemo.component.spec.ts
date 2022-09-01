import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassdemoComponent } from './ngclassdemo.component';

describe('NgclassdemoComponent', () => {
  let component: NgclassdemoComponent;
  let fixture: ComponentFixture<NgclassdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
