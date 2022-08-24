import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleinterestComponent } from './simpleinterest.component';

describe('SimpleinterestComponent', () => {
  let component: SimpleinterestComponent;
  let fixture: ComponentFixture<SimpleinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleinterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
