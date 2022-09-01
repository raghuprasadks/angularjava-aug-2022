import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  regUserForm:FormGroup | any
  /**
   * Method 1 - inject formBuilder into the constructor
  constructor(formBuilder:FormBuilder) {

    this.regUserForm=formBuilder.group({
      firstName:[],
      lastName:[],
      emailId:[]
    })
   }
 */

   //Method 2 - using new FormBuilder
   /**
   constructor(){

   this.regUserForm = new FormBuilder().group({
    firstName: new FormControl('Mark'),
    lastName:  new FormControl(),
    emailId:  new FormControl(),
  })
}
 */
  constructor(){
this.regUserForm = new FormGroup({
  firstName: new FormControl('John', Validators.required),
  lastName: new FormControl(),
  emailId: new FormControl(),
});
}
  ngOnInit(): void {
  }

  UserRegistration(frmValues: FormGroup) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }
    console.log(frmValues)
    console.log(frmValues.value)
    console.log('FirstName: ' + frmValues.controls['firstName'].value);
    console.log('LastName: ' + frmValues.controls['lastName'].value);
    console.log('EmailID: ' + frmValues.controls['emailId'].value);

    frmValues.reset();
  }

}
