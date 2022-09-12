import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateformComponent } from './templateform.component';

describe('TemplateformComponent', () => {
  let component: TemplateformComponent;
  let fixture: ComponentFixture<TemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Invalid user name',waitForAsync(()=>{
    fixture.whenStable().then(()=>{
      let name = component.regForm?.form.controls['username']
      name?.setValue("")
      expect(name?.valid).toBeFalsy()
      

    })
  }))

    it('valid user name',waitForAsync(()=>{
      fixture.whenStable().then(()=>{
        let name = component.regForm?.form.controls['username']        
        name?.setValue("raghu")
        expect(name?.valid).toBeTruthy()
  
      })
    })
    )
   
})


