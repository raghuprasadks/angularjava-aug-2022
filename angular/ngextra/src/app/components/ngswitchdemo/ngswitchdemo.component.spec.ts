import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchdemoComponent } from './ngswitchdemo.component';

describe('NgswitchdemoComponent', () => {
  let component: NgswitchdemoComponent;
  let fixture: ComponentFixture<NgswitchdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
