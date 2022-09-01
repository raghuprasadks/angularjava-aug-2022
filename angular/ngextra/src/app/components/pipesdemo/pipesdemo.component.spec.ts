import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesdemoComponent } from './pipesdemo.component';

describe('PipesdemoComponent', () => {
  let component: PipesdemoComponent;
  let fixture: ComponentFixture<PipesdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
