import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  regUserForm: FormGroup;
  validationMessage: string = '';

  constructor() {

    this.regUserForm = new FormBuilder().group({
      firstName: new FormControl('raghu', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      lastName: new FormControl('prasad', [
        Validators.required
      ]
      ),
      emailID: new FormControl('raghuprasad@gmail.com', [
        Validators.required,
        Validators.email
      ]
      ),
    })

  }

  get _firstName() {
    return this.regUserForm.get('firstName');
  }

  ngOnInit(): void {

    this.regUserForm.setValue({
      firstName: "Wave",
      lastName: "Tutorials",
      emailID: "wavetutorials@Outlook.com",
    });


    this.regUserForm.valueChanges.subscribe(x => {
      console.log('Form Value Changes: ' + JSON.stringify(x));
      // console.log('First Name Value Chang: ' + x.firstName);
    });

    this.regUserForm.statusChanges.subscribe(x => {
      // console.log('Form Status: ' + x);
    });

    /**
    this.regUserForm.get('firstName').statusChanges.subscribe(x => {
     // console.log('First Name Status: ' + x);
    });
 */
  }

  UserRegistration(frmValues: FormGroup) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }

    // Validations:
    if (frmValues.controls['firstName'].value.length > 10) {
      this.validationMessage = "First Name should be more than 10 char in length";
      return;
    }



    console.log(frmValues)
    console.log('FirstName: ' + frmValues.controls['firstName'].value);
    console.log('LastName: ' + frmValues.controls['lastName'].value);
    console.log('EmailID: ' + frmValues.controls['emailID'].value);

    frmValues.reset({
      // 'firstName': 'Value After Submiting'
    });

    this.validationMessage = '';
  }

}
