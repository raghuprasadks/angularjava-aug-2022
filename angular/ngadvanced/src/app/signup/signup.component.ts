import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupGroup:FormGroup|any

  /**
   * 
   * @param formBuilder 
   * Method 1 - Injecting from builder to the constructor
   */

  constructor(private formBuilder:FormBuilder) { 
    this.signupGroup =formBuilder.group({
      name:['test'],
      email:[],
      mobile:[],
      password:[]

    })
  }

  ngOnInit(): void {
  }



  signUp(signupGroup:FormGroup){
    console.log("Sign up ")
    console.log(signupGroup.value)
  }

}
